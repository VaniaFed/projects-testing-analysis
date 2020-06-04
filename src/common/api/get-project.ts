import axios from 'axios';
import { Project } from 'src/types/project';
import { authHeader } from 'src/_helpers/auth-header';

export async function getProject(projectId: string) {
    const config = {
        headers: authHeader()
    };

    const userId = localStorage.getItem('userId');

    const project = await axios.get<{ selectedProject: Project }>(
        `/api/projects/${projectId}`
    );

    const projectInfo = await axios.get(
        `/api/project-info?projectId=${projectId}&userId=${userId}`,
        config
    );

    return {
        ...project.data.selectedProject,
        ...projectInfo.data.projectInfo
    };
}
