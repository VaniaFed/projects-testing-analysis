import React from 'react';
import { Line } from 'types/line';
import { mixClasses } from 'src/components/panel/panel';
import styles from './file-line.module.scss';

interface FileLineProps {
    line: Line & { number: number };
}

export const FileLine = ({ line }: FileLineProps) => {
    return (
        <div className={mixClasses(styles['file-line'])}>
            <div className={styles['file-line__number']}>{line.number}</div>
            <div
                className={mixClasses(
                    styles['file-line__content'],
                    line.color !== undefined &&
                        mixClasses(
                            styles['file-line__border'],
                            styles[`file-line__border--${line.color}`]
                        )
                )}
            >
                {line.content}
            </div>
        </div>
    );
};
