import axios from 'axios';
import { Project } from 'src/types/project';

export async function login(loginInfo: any) {
    const projects = await axios.post('api/login/', {
        ...loginInfo
    });
    return projects.data;
}
