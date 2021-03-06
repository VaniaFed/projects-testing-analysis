import React, { ReactNode } from 'react';
import { mixClasses } from '../panel/panel';
import styles from './modal.module.scss';

interface ModalProps {
    title: string;
    form: ReactNode;
    className?: string;
    canBeClosed?: boolean;
    onClose?: () => any;
}

export const Modal = ({
    title,
    form,
    className,
    canBeClosed = false,
    onClose
}: ModalProps) => {
    return (
        <div className={mixClasses(styles.modal, className)}>
            {canBeClosed && (
                <button
                    className={styles['modal__btn-close']}
                    onClick={onClose}
                >
                    x
                </button>
            )}
            <h2 className={styles.modal__title}>{title}</h2>
            <div>{form}</div>
        </div>
    );
};
