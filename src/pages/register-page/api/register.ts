import axios from 'axios';

export async function register(registerInfo: any) {
    const response = await axios.post('api/register/', {
        ...registerInfo
    });
    return response.data;
}
