import React, { ReactNode } from 'react';
import { mixClasses } from 'src/components/panel/panel';
import styles from './overlay.module.scss';

interface OverlayProps {
    children: ReactNode;
    className?: string;
}
export const Overlay = ({ children, className }: OverlayProps) => {
    return (
        <div className={mixClasses(className, styles.overlay)}>
            <div className={styles.overlay__content}>{children}</div>
        </div>
    );
};
