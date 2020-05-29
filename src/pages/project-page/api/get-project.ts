import axios from 'axios';
import { Project } from 'src/types/project';

export async function getProject(projectId: string) {
    const project = await axios.get<Project>(`/api/projects/${projectId}`);
    const projectInfo = await axios.get(
        `/api/project-info?projectId=${projectId}`
    );

    return {
        ...project.data,
        ...projectInfo.data
    };
}
