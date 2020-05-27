import React from 'react';
import styles from './sidebar-layout.module.scss';

interface SidebarLayoutProps {
    children: React.ReactNode;
}
export const SidebarLayout = ({ children }: SidebarLayoutProps) => {
    return <div className={styles.sidebar}>{children}</div>;
};
