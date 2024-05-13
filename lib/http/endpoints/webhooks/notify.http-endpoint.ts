import IBitbucketPushWebhook from "../../../interfaces/bitbucket-push-webhook.interface";
import findProjectConfig from "../../../modules/router/findProjectConfig";
import executeBranchCommand from "../../../modules/sh/executeBranchCommand";

export default async function notifyHTTPEndpoint (push: IBitbucketPushWebhook, $request: any) {
    const projectConfig = await findProjectConfig(push.repository.name);
    const branch = projectConfig.branches[push.changes[0].new.name];

    if (!branch || !branch.cmd) return {
        success: true,
        message: "No webhook configured for this branch: " + push.changes[0].new.name
    }

    executeBranchCommand(branch.cmd, projectConfig.dir);

    return {
        success: true,
        message: "Webhook executed for branch: " + push.changes[0].new.name
    }
}