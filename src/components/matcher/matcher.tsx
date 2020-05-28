import React from 'react';
import { TestAttribute } from 'src/types/test-attribute';
import styles from './matcher.module.scss';
import { mixClasses } from '../panel/panel';

export interface MatcherProps {
    matcher: TestAttribute;
    className?: string;
}

export const Matcher = ({ matcher, className }: MatcherProps) => {
    return (
        <div className={mixClasses(styles.matcher, className)}>
            <div>{matcher.text}</div>
            <div className={styles.matcher__number}>{matcher.number}</div>
        </div>
    );
};
