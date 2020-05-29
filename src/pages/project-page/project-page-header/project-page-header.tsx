import React from 'react';
import { mixClasses } from 'src/components/panel/panel';
import styles from './project-page-header.module.scss';

interface ProjectPageHeaderProps {
    projectName: string;
    branchName: string;
    version: string;
    lastUpdate: string;
    className?: string;
}

export const ProjectPageHeader = ({
    projectName,
    branchName,
    version,
    lastUpdate,
    className
}: ProjectPageHeaderProps) => {
    return (
        <div className={mixClasses(styles['project-page-header'], className)}>
            <span>Project name {projectName}</span>
            <span>Branch name {branchName}</span>
            <span>Version {version}</span>
            <span>Last update {lastUpdate}</span>
        </div>
    );
};
