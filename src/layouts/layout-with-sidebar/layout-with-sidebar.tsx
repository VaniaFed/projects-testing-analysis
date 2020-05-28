import React from 'react';
import { mixClasses } from 'src/components/panel/panel';
import styles from './layout-with-sidebar.module.scss';

interface LayoutWithSidebarProps {
    children: React.ReactNode;
    sidebarPosition?: 'left' | 'right';
}

export const LayoutWithSidebar = ({
    children,
    sidebarPosition = 'left'
}: LayoutWithSidebarProps) => {
    return (
        <div
            className={` ${mixClasses(
                styles['layout-with-sidebar'],
                'container'
            )} ${
                sidebarPosition === 'left'
                    ? styles['sidebar--left']
                    : styles['sidebar--right']
            }`}
        >
            {children}
        </div>
    );
};
