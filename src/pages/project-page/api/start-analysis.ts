import axios from 'axios';
import { authHeader } from 'src/_helpers/auth-header';

export async function startAnalysis(projectId: string) {
    const config = {
        headers: authHeader()
    };
    const response = await axios.post(
        `/api/${projectId}/analyze`,
        null,
        config
    );

    return response.data.history;
}
