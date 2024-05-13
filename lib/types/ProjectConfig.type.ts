export type ProjectConfig = {
    dir: string;

    branches: Record<string, {
        cmd: string;
    }>
}