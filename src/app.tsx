import React, { lazy, Suspense, useState, useEffect } from 'react';
import { AuthenticatedApp } from './authenticated-app';
import { UnauthenticatedApp } from './unauthenticated-app';

export const App = () => {
    const [user, setUser] = useState({ authToken: '', userName: '' });

    useEffect(() => {
        const authToken = (localStorage.getItem('authToken') as any) || '';
        const userName = (localStorage.getItem('userName') as any) || '';
        setUser({
            authToken,
            userName
        });
    }, [user.authToken]);

    return user && user.authToken.length > 0 ? (
        <AuthenticatedApp />
    ) : (
        <UnauthenticatedApp />
    );
};
