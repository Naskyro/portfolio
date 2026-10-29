// One-off helper: pull readable text + link URLs out of a resume PDF.
// Not part of the site — safe to delete.
import { readFileSync } from "node:fs";
import { inflateSync } from "node:zlib";

const pdf = readFileSync(process.argv[2] ?? "public/resume.pdf", "latin1");

for (const m of pdf.matchAll(/\/URI\s*\((.*?)\)/gs)) {
  console.log("LINK:", m[1]);
}

const objects = new Map();
for (const m of pdf.matchAll(/(\d+)\s+0\s+obj([\s\S]*?)endobj/g)) {
  const sm = m[2].match(/stream\r?\n([\s\S]*?)\r?\n?endstream/);
  let decoded = null;
  if (sm) {
    try { decoded = inflateSync(Buffer.from(sm[1], "latin1")).toString("latin1"); } catch {}
  }
  objects.set(m[1], { body: m[2], decoded });
}

function parseCMap(stream) {
  const map = new Map();
  // bfchar sections: pairs <src> <dst>
  for (const sec of stream.matchAll(/beginbfchar([\s\S]*?)endbfchar/g)) {
    for (const m of sec[1].matchAll(/<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>/g)) {
      map.set(parseInt(m[1], 16), String.fromCodePoint(parseInt(m[2], 16)));
    }
  }
  // bfrange sections: <lo> <hi> <dstStart>  OR  <lo> <hi> [<d1> <d2> ...]
  for (const sec of stream.matchAll(/beginbfrange([\s\S]*?)endbfrange/g)) {
    for (const m of sec[1].matchAll(/<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*(\[[\s\S]*?\]|<[0-9A-Fa-f]+>)/g)) {
      const lo = parseInt(m[1], 16), hi = parseInt(m[2], 16);
      if (m[3].startsWith("[")) {
        const codes = [...m[3].matchAll(/<([0-9A-Fa-f]+)>/g)].map((x) => parseInt(x[1], 16));
        for (let i = 0; i <= hi - lo && i < codes.length; i++) {
          map.set(lo + i, String.fromCodePoint(codes[i]));
        }
      } else {
        const start = parseInt(m[3].slice(1, -1), 16);
        for (let i = 0; i <= hi - lo; i++) {
          map.set(lo + i, String.fromCodePoint(start + i));
        }
      }
    }
  }
  return map;
}

const fontCMaps = new Map();
for (const [num, obj] of objects) {
  if (!/\/Type\s*\/Font/.test(obj.body)) continue;
  const tu = obj.body.match(/\/ToUnicode\s+(\d+)\s+0\s+R/);
  const cmapObj = tu && objects.get(tu[1]);
  if (cmapObj?.decoded) fontCMaps.set(num, parseCMap(cmapObj.decoded));
}

const resToFont = new Map();
for (const m of pdf.matchAll(/\/(F\d+)\s+(\d+)\s+0\s+R/g)) {
  resToFont.set(m[1], m[2]);
}

const content = [...objects.values()]
  .filter((o) => o.decoded && (o.decoded.match(/BT/g) || []).length > 5)
  .map((o) => o.decoded)[0];

let font = resToFont.keys().next().value;
const out = [];
for (const m of content.matchAll(/\/(F\d+)\s+[\d.]+\s+Tf|(-?[\d.]+)\s+(-?[\d.]+)\s+Td|<([0-9A-Fa-f]+)>\s*Tj|ET/g)) {
  if (m[1]) font = m[1];
  else if (m[2] !== undefined) {
    if (Math.abs(parseFloat(m[3])) > 4) out.push("\n");
    else if (parseFloat(m[2]) > 1.5) out.push(" ");
  } else if (m[4]) {
    const cmap = fontCMaps.get(resToFont.get(font));
    for (let i = 0; i < m[4].length; i += 4) {
      out.push(cmap?.get(parseInt(m[4].slice(i, i + 4), 16)) ?? "�");
    }
  } else out.push("\n");
}
console.log("---- TEXT ----");
console.log(out.join("").replace(/[ \t]+\n/g, "\n").replace(/\n{2,}/g, "\n"));
