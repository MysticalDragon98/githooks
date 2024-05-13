export default interface IBitbucketPushWebhookCommit {
    type: "commit",
    hash: string;
    date: string;
    author: {
        type: "author";
        raw: string;
    };

    message: string;
    summary: {
        type: "rendered";
        raw: string;
        markup: string;
        html: string;
    };

    links: {
        self: { href: string; }
        html: { href: string; }
    };

    parents: {
        type: "commit";
        hash: string;

        links: {
            self: { href: string; }
            html: { href: string; }
        };
    };

    rendered: {};
    properties: {};
}