import { config } from "dotenv";
import { ok } from "assert";

config();

ok(process.env.HTTP_PORT, 'Missing required environment variable: HTTP_PORT');
export const $HTTP_PORT = process.env.HTTP_PORT;
ok(process.env.BITBUCKET_SECRET, 'Missing required environment variable: BITBUCKET_SECRET');
export const $BITBUCKET_SECRET = process.env.BITBUCKET_SECRET;
export const $CONFIG_FILE = process.env.CONFIG_FILE ?? "/etc/githooks.d/conf.toml";