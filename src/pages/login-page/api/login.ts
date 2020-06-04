import axios from 'axios';

export async function login(loginInfo: any) {
    const response: any = await axios.post('api/login/', {
        ...loginInfo
    });

    localStorage.setItem('authToken', response.data.token);
    localStorage.setItem('userName', response.data.userName);
    localStorage.setItem('userId', response.data.userId);

    return response.data;
}
