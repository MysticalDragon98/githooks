import { spawn } from 'child_process';

export default async function executeShellCommand(command: string, options: { workdir: string, output?: string }): Promise<void> {
    return new Promise((resolve, reject) => {
        const child = spawn(command, options.output? {
            shell: true,
            stdio: 'pipe', // This pipes stdin, stdout, and stderr
            cwd: options.workdir
        } : {
            shell: true,
            stdio: 'inherit', // This pipes stdin, stdout, and stderr
            cwd: options.workdir
        });

        if (options.output) {
            child.stdout.pipe(require('fs').createWriteStream(options.output));
        }

        child.on('close', (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`Command failed with exit code ${code}`));
            }
        });

        child.on('error', (error) => {
            reject(error);
        });
    });
}
