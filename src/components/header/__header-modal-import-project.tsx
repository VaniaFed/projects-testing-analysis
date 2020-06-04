import React from 'react';
import { Overlay } from 'src/layouts/overlay/overlay';
import { Form, FormField } from '../form';
import { Modal } from '../modal';
import { importProject } from './api/import-project';

const formFields: FormField[] = [
    {
        id: 'url',
        label: 'Url',
        name: 'url',
        type: 'text',
        required: true
    },
    {
        id: 'public',
        label: 'Public',
        name: 'public',
        type: 'checkbox'
    }
];

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
                    />
                }
            />
        </Overlay>
    );
};
