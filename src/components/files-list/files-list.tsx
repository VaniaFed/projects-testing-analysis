import React, { ReactNode } from 'react';

interface FilesListProps {
    files: ReactNode[];
}

export const FilesList = ({ files }: FilesListProps) => {
    return (
        <ol>
            {files.map(file => (
                <li>{file}</li>
            ))}
        </ol>
    );
};
