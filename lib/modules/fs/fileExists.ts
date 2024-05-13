import normalizePath from "./normalizePath";

const fs = require('fs').promises;

export default async function fileExists(filePath: string) {
  try {
    await fs.access(normalizePath(filePath));
    return true;
  } catch {
    return false;
  }
}