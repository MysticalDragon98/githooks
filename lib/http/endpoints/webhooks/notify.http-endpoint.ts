import IBitbucketPushWebhook from "../../../interfaces/bitbucket-push-webhook.interface";

export default async function notifyHTTPEndpoint (push: IBitbucketPushWebhook, $request: any) {
    console.log(push);
}