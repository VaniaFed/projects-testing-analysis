import React from 'react';
import styles from './form.module.scss';
import { mixClasses } from '../panel/panel';

export interface FormField {
    label: string;
    name: string;
    id: string;
    type?: 'text' | 'checkbox' | 'password';
}

interface FormProps {
    fields: FormField[];
    className?: string;
    submitText: string;
    onInput?: (arg0: any) => void;
    onSubmit: (arg0: any) => void;
}

export const Form = ({
    fields,
    className,
    submitText = 'Submit',
    onSubmit,
    onInput
}: FormProps) => {
    return (
        <form className={mixClasses(styles.form, className)}>
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
                            name="login"
                            className={styles.form__field}
                            onInput={onInput}
                        />
                    </div>
                );
            })}
            <button className={styles.form__button} onClick={onSubmit}>
                {submitText}
            </button>
        </form>
    );
};
