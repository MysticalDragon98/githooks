import * as fs from "fs/promises";
import normalizePath from "./normalizePath";

export default async function readFile (path: string, defaultContent?: Buffer) {
    path = normalizePath(path);
    try {
        return await fs.readFile(path);
    } catch (e) {
        if (defaultContent && e.code === "ENOENT") {
            return defaultContent;
        }
        throw e;
    }
}