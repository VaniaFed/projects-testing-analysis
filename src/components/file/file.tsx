import React from 'react';
import { File as IFile } from 'src/types/file';
import styles from './file.module.scss';
import { FileLine } from './file-line';

interface FileProps {
    file: IFile;
}

export const File = ({ file }: FileProps) => {
    return (
        <div>
            <div className={styles['file-header']}>
                <div className={styles['file-header__project-name']}>
                    {file.name}
                </div>
            </div>
            <div className={styles.file__content}>
                {file.lines.map(({ content, color }, number) => (
                    <FileLine line={{ number, content, color }} />
                ))}
            </div>
        </div>
    );
};
