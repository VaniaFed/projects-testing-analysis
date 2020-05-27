import React from 'react';
import { ICard, Card } from './panel-card';
import styles from './panel.module.scss';

export const mixClasses = (...classNames: string[]) => {
    return classNames.join(' ');
};

interface PanelProps {
    cards: ICard[];
    className?: string;
}
export const Panel = ({ cards, className }: PanelProps) => {
    return (
        <div className={mixClasses(styles.panel__cards, className)}>
            {cards.map(card => (
                <Card card={card} className={styles.panel__card} />
            ))}
        </div>
    );
};
