export const authHeader = () => {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
        return { Authorization: `Basic ${authToken}` };
    }
    return {};
};
