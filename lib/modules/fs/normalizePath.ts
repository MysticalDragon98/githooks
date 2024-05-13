export default function normalizePath (path: string) {
    if (path[0] === "~") path = path.replace("~", process.env.HOME);

    return path;
}