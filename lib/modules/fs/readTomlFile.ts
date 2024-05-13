import Toml from "toml";
import readStringFile from "./readStringFile";

export default async function readTomlFile<T> (path: string, defaultValue?: T): Promise<T> {
    return await Toml.parse(await readStringFile(path, ""))
}