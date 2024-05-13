import { ProjectConfig } from "../../types/ProjectConfig.type";

export default function normalizeProjectConfig (config: Partial<ProjectConfig>) {
    return <ProjectConfig>{
        branches: config.branches ?? {},
        dir: config.dir
    }
}