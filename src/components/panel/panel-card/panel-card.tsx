import React from 'react';
import styles from './panel-card.module.scss';
import { mixClasses } from '../panel';

export interface ICard {
    number: string;
    text: string;
}

interface CardProps {
    card: ICard;
    className?: string;
}
export const Card = ({ card, className }: CardProps) => {
    console.log(className);

    return (
        <div className={mixClasses(styles.card, className)}>
            <div className={styles.card__number}>{card.number}</div>
            <div className={styles.card__text}>{card.text}</div>
        </div>
    );
};
