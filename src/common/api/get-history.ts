import axios from 'axios';

export async function getHistory(projectId: string) {
    const history = await axios.get(`/api/history?projectId=${projectId}`);

    return history.data.history;
}
