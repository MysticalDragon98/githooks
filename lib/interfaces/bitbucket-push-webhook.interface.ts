import IBitbucketPushWebhookChange from "./bitbucket-push-webhook-change.interface"
import IBitbucketPushWebhookCommit from "./bitbucket-push-webhook-commit.interface";

export default interface IBitbucketPushWebhook {
    name: string;

    changes: {
        old: IBitbucketPushWebhookChange;
        new: IBitbucketPushWebhookChange;

        truncated: boolean;
        created: boolean;
        forced: boolean;
        closed: boolean;

        links: {
            commits: { href: string; }
            diff: { href: string; }
            html: { href: string; }
        },

        commits: IBitbucketPushWebhookCommit[];
    }[];

    repository: {
        type: "repository";
        name: string;
        scm: "git";
        website: string;
        full_name: string;

        uuid: string;
        parent: null;

        links: {
            self: { href: string; }
            html: { href: string; }
            avatar: { href: string; }
        };

        owner: {
            display_name: string;
            type: "team";
            uuid: string;
            username: string;
            links: {
                self: { href: string; }
                html: { href: string; }
                avatar: { href: string; }
            }
        };

        workspace: {
            type: "workspace";
            uuid: string;
            name: string;
            slug: string;
            links: {
                self: { href: string; }
                html: { href: string; }
                avatar: { href: string; }
            };
        }

        is_private: boolean;
        project: {
            type: "project";
            key: string;
            uuid: string;
            name: string;
            links: {
                self: { href: string; }
                html: { href: string; }
                avatar: { href: string; }
            };
        }
    };

    actor: {
        type: "user";
        uuid: string;
        account_id: string;
        nickname: string;
        display_name: string;
        links: {
            self: { href: string; }
            html: { href: string; }
            avatar: { href: string; }
        };
        
    }
}