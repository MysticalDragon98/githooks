import { readdir } from "fs/promises";
import loadConfig from "../config/loadConfig";
import normalizePath from "../fs/normalizePath";
import { join } from "path";
import fileExists from "../fs/fileExists";
import normalizeProjectConfig from "../projects/normalizeProjectConfig";
import readTomlFile from "../fs/readTomlFile";

export default async function findProjectConfig (projectName: string) {
    const config = await loadConfig();
    const folders = await config.includes;

    for (const folder of folders) {
        const folderPath = normalizePath(folder);
        const filepath = join(folderPath, projectName, ".toml");

        console.log(filepath)

        if (!await fileExists(filepath)) continue;

        return normalizeProjectConfig(await readTomlFile(filepath));
    }

    return null;
}