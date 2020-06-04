import axios from 'axios';

export async function register(registerInfo: any) {
    const response: any = await axios.post('api/register/', {
        ...registerInfo
    });

    localStorage.setItem('authToken', response.data.token);
    localStorage.setItem('userName', response.data.userName);
    localStorage.setItem('userId', response.data.userId);

    return response.data;
}
