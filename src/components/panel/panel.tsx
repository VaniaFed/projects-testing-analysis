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
    cardClassName?: string;
}
export const Panel = ({ cards, className, cardClassName }: PanelProps) => {
    return (
        <div className={mixClasses(styles.panel__cards, className)}>
            {cards.map(card => (
                <Card
                    card={card}
                    className={mixClasses(styles.panel__card, cardClassName)}
                    key={`${card.text}${card}`}
                />
            ))}
        </div>
    );
};
