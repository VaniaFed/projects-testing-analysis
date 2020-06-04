import React, { useState } from 'react';
import { Overlay } from 'layouts/overlay/overlay';
import { Modal } from 'src/components/modal';
import { useHistory } from 'react-router-dom';
import { FormField, Form } from 'src/components/form/';
import { register } from './api/register';

export const RegisterPage = () => {
    const history = useHistory();
    const [error, setError] = useState('');
    const onSubmitForm = (formState: any) => {
        (async () => {
            try {
                await register(formState);

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
            type: 'text'
        },
        {
            id: 'username',
            label: 'Username',
            name: 'username',
            type: 'text'
        },
        {
            id: 'password',
            label: 'Password',
            name: 'password',
            type: 'password'
        },
        {
            id: 'email',
            label: 'E-mail',
            name: 'email',
            type: 'email'
        }
    ];
    return (
        <div>
            <Overlay>
                <Modal
                    title="Register"
                    form={
                        <Form
                            fields={formFields}
                            onSubmit={onSubmitForm}
                            submitText="Register"
                            error={error}
                        />
                    }
                />
            </Overlay>
        </div>
    );
};
