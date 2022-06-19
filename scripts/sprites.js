import fs from "fs/promises";
import path from "path";
import util from "util";

import g from "glob";
const glob = util.promisify(g);

import { Sprites } from "@basemaps/sprites";

await fs.mkdir("./dist/sprites/", { recursive: true });
await fs.rm("./dist/sdf/", { force: true, recursive: true });

async function copyDir(src, dest) {
  const entries = await fs.readdir(src, { withFileTypes: true });
  await fs.mkdir(dest);
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

const sprites = await Promise.all(
  (
    await glob("./icons/*.svg")
  ).map(async (spritePath) => {
    const id = path.parse(spritePath).name;
    const svg = await fs.readFile(spritePath);
    return { id, svg };
  })
);

const generated = await Sprites.generate(sprites, [1, 2]);

for (const result of generated) {
  const scaleText = result.pixelRatio === 1 ? "" : `@${result.pixelRatio}x`;
  const outputPng = `./dist/sprites/sprite${scaleText}.png`;
  const outputJson = `./dist/sprites/sprite${scaleText}.json`;

  await fs.writeFile(outputPng, result.buffer);
  await fs.writeFile(outputJson, JSON.stringify(result.layout, null, 2));
}

copyDir("src/sdf", "dist/sdf");
