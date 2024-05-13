import { $CONFIG_FILE } from "../../env";
import { GithooksConfig } from "../../types/GithooksConfig.type";
import readTomlFile from "../fs/readTomlFile";

export default async function loadConfig (): Promise<GithooksConfig> {
    return await readTomlFile<GithooksConfig>($CONFIG_FILE, {
        includes: []
    });
}