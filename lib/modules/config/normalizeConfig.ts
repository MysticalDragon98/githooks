import { GithooksConfig } from "../../types/GithooksConfig.type";

export default async function normalizeConfig (config: Partial<GithooksConfig>) {
    return {
        includes: config.includes ?? []
    };
}