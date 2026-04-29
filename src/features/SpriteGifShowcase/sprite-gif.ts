import { readdir } from "node:fs/promises";
import path from "node:path";

import { createServerFn } from "@tanstack/react-start";

export type SpriteGif = {
  fileName: string;
  id: string;
  label: string;
  src: string;
  variant: "default" | "female" | "form";
};

const SPRITES_DIRECTORY = path.join(process.cwd(), "public/assets/sprites/sprites-gif");
const SPRITES_PUBLIC_PATH = "/assets/sprites/sprites-gif";

function formatSpriteLabel(fileName: string) {
  const baseName = fileName.replace(/\.gif$/i, "");
  const parts = baseName.split("_");

  return parts
    .map((part) => {
      if (/^\d+$/.test(part)) {
        return `Forme ${part}`;
      }

      if (part.toLowerCase() === "female") {
        return "Femelle";
      }

      return `${part.charAt(0)}${part.slice(1).toLowerCase()}`;
    })
    .join(" ");
}

function getSpriteVariant(fileName: string): SpriteGif["variant"] {
  if (/_female\.gif$/i.test(fileName)) {
    return "female";
  }

  if (/_\d+\.gif$/i.test(fileName)) {
    return "form";
  }

  return "default";
}

export const getSpriteGifs = createServerFn({ method: "GET" }).handler(async () => {
  const files = await readdir(SPRITES_DIRECTORY);

  return files
    .filter((fileName) => fileName.toLowerCase().endsWith(".gif"))
    .sort((left, right) => left.localeCompare(right))
    .map((fileName) => ({
      fileName,
      id: fileName.replace(/\.gif$/i, "").toLowerCase(),
      label: formatSpriteLabel(fileName),
      src: `${SPRITES_PUBLIC_PATH}/${fileName}`,
      variant: getSpriteVariant(fileName),
    }));
});
