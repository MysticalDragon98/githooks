import { Server } from "@coretools/http-server";
import { $HTTP_PORT } from "../../lib/env";
import webhooks from "../../lib/http/endpoints/webhooks/index";
import { log } from "termx";
import StyleOK from "../../lib/styles/OK.style";
//* Imports

const Endpoints = {
    webhooks,
    //* Endpoints
}

export async function initHTTPServer () {
    const server = new Server({
        endpoints: Endpoints,
        port: $HTTP_PORT,
        onStart () {
            log(StyleOK(), "HTTP server started on port: " + $HTTP_PORT);
        }
    });

    //* Plugins
    await server.listen();
}