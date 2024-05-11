import { config } from "dotenv";
import { ok } from "assert";

config();

ok(process.env.HTTP_PORT, 'Missing required environment variable: HTTP_PORT');
export const $HTTP_PORT = process.env.HTTP_PORT;
