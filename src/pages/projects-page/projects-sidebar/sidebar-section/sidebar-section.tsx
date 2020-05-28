import React from 'react';
import { TestAttribute } from 'types/test-attribute';
import { Matcher } from 'src/components/matcher/matcher';
import styles from './sidebar-section.module.scss';

interface SidebarSectionProps {
    title: string;
    testAttributes: TestAttribute[];
    className?: string;
}
export const SidebarSection = ({
    title,
    testAttributes,
    className
}: SidebarSectionProps) => (
    <div className={className}>
        <h4 className={styles.sidebar__title}>{title}</h4>
        {testAttributes.map(testAttribute => (
            <Matcher
                matcher={testAttribute}
                className={styles.sidebar__matcher}
            />
        ))}
    </div>
);
