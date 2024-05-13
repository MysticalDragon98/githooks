import { Server } from "@olptools/http-server";
import { $HTTP_PORT } from "../../lib/env";
import webhooks from "../../lib/http/endpoints/webhooks/index";
//* Imports

const Endpoints = {
    webhooks,
    //* Endpoints
}

export async function initHTTPServer () {
    const server = new Server({
        endpoints: Endpoints,
        port: $HTTP_PORT
    });

    //* Plugins
    await server.listen();
}