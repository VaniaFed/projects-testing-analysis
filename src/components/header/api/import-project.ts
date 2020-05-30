import axios from 'axios';

export async function importProject(project: any) {
    const response = await axios.post('/api/import-project/', project);

    return response;
}
