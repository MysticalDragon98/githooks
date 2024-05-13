import { $CONFIG_FILE } from "../../env";
import { GithooksConfig } from "../../types/GithooksConfig.type";
import readTomlFile from "../fs/readTomlFile";

let ConfigCache: GithooksConfig = null;

export default async function loadConfig (): Promise<GithooksConfig> {
    if (ConfigCache) return ConfigCache;
    
    return ConfigCache = await readTomlFile<GithooksConfig>($CONFIG_FILE, {
        includes: []
    });
}