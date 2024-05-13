import IBitbucketPushWebhook from "./bitbucket-push-webhook.interface";

export default interface IBitbucketWebhook {
    push: IBitbucketPushWebhook;
}