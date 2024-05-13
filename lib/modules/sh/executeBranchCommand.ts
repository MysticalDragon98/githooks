import executeShellCommand from "./executeShellCommand";

export default async function executeBranchCommand (cmd: string, cwd: string) {
    await executeShellCommand(cmd, {
        workdir: cwd
    })
}