import React, { useState } from 'react';
import { Overlay } from 'layouts/overlay/overlay';
import { Modal } from 'src/components/modal';
import { useHistory } from 'react-router-dom';
import { FormField, Form } from 'src/components/form/';
import { login } from './api/login';

export const LoginPage = () => {
    const history = useHistory();
    const [error, setError] = useState('');
    const handleSubmitForm = (formState: any) => {
        (async () => {
            try {
                await login(formState);

                window.location.reload();
            } catch (err) {
                setError(err);
            }
        })();
    };
    const formFields: FormField[] = [
        {
            id: 'login',
            label: 'Login',
            name: 'login',
            type: 'text',
            required: true
        },
        {
            id: 'password',
            label: 'Password',
            name: 'password',
            type: 'password',
            required: true
        }
    ];
    return (
        <div>
            <Overlay>
                <Modal
                    title="Login"
                    form={
                        <Form
                            fields={formFields}
                            onSubmit={handleSubmitForm}
                            submitText="Login"
                            error={error}
                        />
                    }
                />
            </Overlay>
        </div>
    );
};
