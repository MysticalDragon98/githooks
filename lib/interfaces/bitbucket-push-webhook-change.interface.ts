import IBitbucketPushWebhookCommit from "./bitbucket-push-webhook-commit.interface";

export default interface IBitbucketPushWebhookChange {
    type: "branch";
    merge_strategies: ("merge_commit" | "squash" | "fast_forward")[];
    default_merge_strategy: string;
    name: string;
    target: IBitbucketPushWebhookCommit;

    links: {
        self: { href: string; }
        commits: { href: string; }
        html: { href: string; }
    };
}