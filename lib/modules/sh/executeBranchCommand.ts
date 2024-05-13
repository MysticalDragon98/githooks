import generateJobTempFile from "../fs/generateJobTempFile";
import executeShellCommand from "./executeShellCommand";

export default async function executeBranchCommand (cmd: string, cwd: string, outputFile?: string) {
    await executeShellCommand(cmd, {
        workdir: cwd,
        output: outputFile
    })
}