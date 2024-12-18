import { log } from "termx";
import IBitbucketPushWebhook from "../../../interfaces/bitbucket-push-webhook.interface";
import findProjectConfig from "../../../modules/router/findProjectConfig";
import executeBranchCommand from "../../../modules/sh/executeBranchCommand";
import generateJobTempFile from "../../../modules/fs/generateJobTempFile";
import StyleError from "../../../styles/Error.style";
import StyleOK from "../../../styles/OK.style";

export default async function notifyHTTPEndpoint (push: IBitbucketPushWebhook, repository: IBitbucketPushWebhook["repository"], $request: any) {
    const repositoryName = repository.full_name.split("/")[1];
    const projectConfig = await findProjectConfig(repositoryName);
    const branchName = push.changes[0].new.name;
    

    if (!projectConfig) {
        log(StyleError(), "No project found for repository: " + repositoryName);
        
        return {
            success: false,
            message: "No project found for repository: " + repositoryName
        }
    }

    const branch = projectConfig.branches[branchName];

    if (!branch || !branch.cmd) {
        log(StyleError(), "No webhook configured for this branch: " + push.changes[0].new.name);

        return {
            success: true,
            message: "No webhook configured for this branch: " + push.changes[0].new.name
        }
    }

    const logfile =  generateJobTempFile();

    executeBranchCommand(
        branch.cmd,
        projectConfig.dir
    );

    log(StyleOK(), "Webhook executed for branch: " + push.changes[0].new.name + ". Logfile: " + logfile);

    return {
        success: true,
        message: "Webhook executed for branch: " + push.changes[0].new.name
    };
}