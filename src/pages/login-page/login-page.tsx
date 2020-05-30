import React, { useState } from 'react';
import { Overlay } from 'layouts/overlay/overlay';
import { Modal } from 'src/components/modal';
import { useHistory } from 'react-router-dom';
import { FormField, Form } from 'src/components/form/';
import { login } from './api/login';

export const LoginPage = () => {
    const [formState, setFormState] = useState({});
    const history = useHistory();
    const handleInputChange = (e: any) => {
        const targetEl = e.currentTarget;
        switch (targetEl.name) {
            case 'login': {
                setFormState({
                    ...formState,
                    login: targetEl.value
                });
                break;
            }
            case 'password': {
                setFormState({
                    ...formState,
                    password: targetEl.value
                });
                break;
            }
            default: {
                break;
            }
        }
    };
    const handleSubmitForm = (e: any) => {
        e.preventDefault();
        (async () => {
            const result = await login(formState);
            if (result.success) {
                history.push('/');
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
            id: 'password',
            label: 'Password',
            name: 'password',
            type: 'password'
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
                            onInput={handleInputChange}
                            submitText="Login"
                        />
                    }
                />
            </Overlay>
        </div>
    );
};
