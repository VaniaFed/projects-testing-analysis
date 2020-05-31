import axios from 'axios';
import { Project } from 'src/types/project';

export async function getProjects() {
    const projects = await axios.get<{ projects: Project[] }>('api/projects/');
    return projects.data.projects;
}
