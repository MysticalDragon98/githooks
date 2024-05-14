import { log } from "termx";
import IBitbucketPushWebhook from "../../../interfaces/bitbucket-push-webhook.interface";
import findProjectConfig from "../../../modules/router/findProjectConfig";
import executeBranchCommand from "../../../modules/sh/executeBranchCommand";
import generateJobTempFile from "../../../modules/fs/generateJobTempFile";
import { JobsLogger } from "../../../loggers";

const inspector = JobsLogger.method("notifyHTTPEndpoint");

export default async function notifyHTTPEndpoint (push: IBitbucketPushWebhook, repository: IBitbucketPushWebhook["repository"], $request: any) {
    const logger = inspector.process();
    const projectConfig = await findProjectConfig(repository.name);
    const branchName = push.changes[0].new.name;

    logger.log({
        type: "received",
        data: {
            repo: repository.full_name,
            branch: branchName
        }
    })

    if (!projectConfig) {
        log("No project found for repository: " + repository.name);
        logger.log({
            type: "error",
            data: {
                repo: repository.full_name,
                branch: branchName,
                code: "NO_PROJECT",
                message: "No project found for repository: " + repository.name
            }
        })

        return {
            success: false,
            message: "No project found for repository: " + repository.name
        }
    }

    const branch = projectConfig.branches[branchName];

    if (!branch || !branch.cmd) {
        log("No webhook configured for this branch: " + push.changes[0].new.name);

        logger.log({
            type: "error",
            data: {
                repo: repository.full_name,
                branch: branchName,
                code: "NO_WEBHOOK",
                message: "No webhook configured for this branch: " + push.changes[0].new.name
            }
        })

        return {
            success: true,
            message: "No webhook configured for this branch: " + push.changes[0].new.name
        }
    }

    const logfile =  generateJobTempFile();

    executeBranchCommand(
        branch.cmd,
        projectConfig.dir,
        logfile
    ).then(() => {
        logger.log({
            type: "exec:success",
            data: {
                repo: repository.full_name,
                branch: branchName,
                command: branch.cmd,
                logfile
            }
        })
    }).catch((err) => {
        logger.log({
            type: "exec:error",
            data: {
                repo: repository.full_name,
                branch: branchName,
                command: branch.cmd,
                code: "EXEC_ERROR",
                message: err.message,
                logfile
            }
        });
    });

    logger.log({
        type: "queued",
        data: {
            repo: repository.full_name,
            branch: branchName,
            command: branch.cmd,
            logfile
        }
    
    })
    return {
        success: true,
        message: "Webhook executed for branch: " + push.changes[0].new.name
    }
}