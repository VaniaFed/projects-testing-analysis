import axios from 'axios';
import { authHeader } from 'src/_helpers/auth-header';

export async function importProject(project: any) {
    const config = {
        headers: authHeader()
    };

    const userId = localStorage.getItem('userId');

    const response = await axios.post(
        `/api/${userId}/import-project/`,
        project,
        config
    );

    return response;
}
