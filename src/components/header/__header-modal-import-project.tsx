import React, { useState } from 'react';
import { Overlay } from 'src/layouts/overlay/overlay';
import { Form, FormField } from '../form';
import { Modal } from '../modal';
import { importProject } from './api/import-project';

const handleImportProject = (formState: any) => {
    try {
        (async () => {
            const response = await importProject(formState);
        })();
    } catch (err) {
        console.log(err);
        console.log('error');
    }
};

interface HeaderModalImportProjectProps {
    onCloseModal?: () => any;
}
export const HeaderModalImportProject = ({
    onCloseModal
}: HeaderModalImportProjectProps) => {
    const [isPrivate, setIsPrivate] = useState(true);

    const initialFormFields: FormField[] = [
        {
            id: 'url',
            label: 'Url',
            name: 'url',
            type: 'text',
            required: true
        },
        {
            id: 'private',
            label: 'Private',
            name: 'private',
            type: 'checkbox'
        }
    ];
    const [formFields, setFormFields] = useState<FormField[]>(
        initialFormFields
    );

    const switchPublic = () => {
        console.log({ isPrivate });

        if (isPrivate) {
            const formFieldsWithAdditionalCredentials: FormField[] = [
                ...formFields,
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
            setFormFields(formFieldsWithAdditionalCredentials);
        } else {
            setFormFields(initialFormFields);
        }
    };

    const handleChangeCheckbox = () => {
        setIsPrivate(isPrivate === false);
        switchPublic();
    };

    return (
        <Overlay>
            <Modal
                title="Import a project"
                canBeClosed
                onClose={onCloseModal}
                form={
                    <Form
                        fields={formFields}
                        onSubmit={handleImportProject}
                        submitText="Import"
                        onChangeCheckbox={handleChangeCheckbox}
                    />
                }
            />
        </Overlay>
    );
};
