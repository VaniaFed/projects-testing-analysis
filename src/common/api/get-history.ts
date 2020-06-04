import axios from 'axios';
import { authHeader } from 'src/_helpers/auth-header';

export async function getHistory(projectId: string) {
    const config = {
        headers: authHeader()
    };
    const history = await axios.get(
        `/api/history?projectId=${projectId}`,
        config
    );

    return history.data.history;
}
