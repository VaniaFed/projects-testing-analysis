export const authHeader = () => {
    const authToken = localStorage.getItem('authToken');

    console.log(authToken);

    if (authToken) {
        return { Authorization: `Basic ${authToken}` };
    }
    return {};
};
