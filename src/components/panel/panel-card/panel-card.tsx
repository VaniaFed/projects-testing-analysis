import React from 'react';
import { TestAttribute } from 'types/test-attribute';
import styles from './panel-card.module.scss';
import { mixClasses } from '../panel';

interface CardProps {
    card: TestAttribute;
    className?: string;
}
export const Card = ({ card, className }: CardProps) => (
    <div className={mixClasses(styles.card, className)}>
        <div className={styles.card__number}>{card.number}</div>
        <div className={styles.card__text}>{card.text}</div>
    </div>
);
