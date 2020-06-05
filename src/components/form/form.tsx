import React, { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import styles from './form.module.scss';
import { mixClasses } from '../panel/panel';

export interface FormField {
    label: string;
    name: string;
    id: string;
    required?: boolean;
    type?: 'text' | 'checkbox' | 'password' | 'email';
}

interface FormProps {
    fields: FormField[];
    className?: string;
    submitText: string;
    bottomContent?: ReactNode;
    error?: any;
    onChangeCheckbox?: any;
    onSubmit: (arg0: any) => void;
}

export const Form = ({
    fields,
    className,
    submitText = 'Submit',
    error,
    bottomContent,
    onSubmit,
    onChangeCheckbox = () => {}
}: FormProps) => {
    const { register, handleSubmit } = useForm();

    return (
        <form
            className={mixClasses(styles.form, className)}
            onSubmit={handleSubmit(onSubmit)}
        >
            {fields.map(field => {
                return (
                    <div className={styles.form__input}>
                        <label
                            htmlFor={field.id}
                            className={styles.form__label}
                        >
                            {field.label}
                        </label>
                        <input
                            type={field.type}
                            id={field.id}
                            name={field.name}
                            className={styles.form__field}
                            ref={register}
                            onChange={
                                field.type === 'checkbox'
                                    ? onChangeCheckbox
                                    : () => {}
                            }
                            required={field.required}
                        />
                    </div>
                );
            })}
            <button className={styles.form__button}>{submitText}</button>
            {error && error.message && error.message.length > 0 && (
                <div className={styles['form__error-label']}>
                    {error.message}
                </div>
            )}
            {bottomContent}
        </form>
    );
};
