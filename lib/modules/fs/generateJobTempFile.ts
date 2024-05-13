import { randomUUID } from "crypto";

export default function generateJobTempFile () {
    const id = randomUUID();
    return `/tmp/githooks-job-${id}.log`;
}