//* Imports

import { initHTTPServer } from "./plugins/http/initHTTPServer";

async function main () {
    await Promise.all([
        initHTTPServer()
    ]);

    //* Post Main
}

main();

process.on('uncaughtException', console.log);
process.on('unhandledRejection', console.log);