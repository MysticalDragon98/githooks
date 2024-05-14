//* Imports

import datadogInspector from "@olptools/dd-inspector";
import { initHTTPServer } from "./plugins/http/initHTTPServer";
import { addInspectorPlugin, createModuleInspector } from "@coretools/inspector";
import { $DD_APIKEY, $DD_APPNAME, $DD_HOST } from "./lib/env";


if ($DD_APIKEY && $DD_APPNAME && $DD_HOST) {
    addInspectorPlugin(datadogInspector({
        apiKey: $DD_APIKEY,
        appName: $DD_APPNAME,
        host: $DD_HOST
    }))

    createModuleInspector("MAIN").method("datadog:setup").log({ type: "success" })
}

async function main () {
    await Promise.all([
        initHTTPServer()
    ]);

    //* Post Main
}

main();

process.on('uncaughtException', console.log);
process.on('unhandledRejection', console.log);