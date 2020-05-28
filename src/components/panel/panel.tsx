import React from 'react';
import { TestAttribute } from 'types/test-attribute';
import { Card } from './panel-card';
import styles from './panel.module.scss';

export const mixClasses = (...classNames: string[]) => {
    return classNames.join(' ');
};

interface PanelProps {
    cards: TestAttribute[];
    className?: string;
}
export const Panel = ({ cards, className }: PanelProps) => {
    return (
        <div className={mixClasses(styles.panel__cards, className)}>
            {cards.map(card => (
                <Card
                    card={card}
                    className={styles.panel__card}
                    key={`${card.text}${card}`}
                />
            ))}
        </div>
    );
};
