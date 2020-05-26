import React from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?(something?: any): any;
}

export const Button = ({
    text,
    type = 'button',
    className,
    onClick
}: ButtonProps) => {
    const resultClass = classNames(className, styles.button);
    return (
        <button className={resultClass} onClick={onClick} type={type}>
            {text}
        </button>
    );
};
