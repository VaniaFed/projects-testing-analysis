import axios from 'axios';
import { Project } from 'src/types/project';

export async function login(loginInfo: any) {
    const response: any = await axios.post('api/login/', {
        ...loginInfo
    });

    localStorage.setItem('authToken', response.data.token);
    localStorage.setItem('userName', response.data.userName);

    return response.data;
}
