import readFile from "./readFile";

export default async function readStringFile (path: string, defaultContent?: string) {
    const content = await readFile(path, defaultContent && Buffer.from(defaultContent));

    return content.toString();
}