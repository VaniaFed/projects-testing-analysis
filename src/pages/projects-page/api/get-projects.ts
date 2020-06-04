import axios from 'axios';
import { Project } from 'src/types/project';
import { authHeader } from 'src/_helpers/auth-header';

export async function getProjects() {
    const config = {
        headers: authHeader()
    };
    const userId = localStorage.getItem('userId');
    const projects = await axios.get<{ projects: Project[] }>(
        `api/${userId}/projects/`,
        config
    );
    return projects.data.projects;
}
