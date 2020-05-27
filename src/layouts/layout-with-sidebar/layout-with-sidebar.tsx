import React from 'react';
import styles from './layout-with-sidebar.module.scss';

interface LayoutWithSidebarProps {
    children: React.ReactNode;
}

export const LayoutWithSidebar = ({ children }: LayoutWithSidebarProps) => {
    return <div className={styles['layout-with-sidebar']}>{children}</div>;
};
