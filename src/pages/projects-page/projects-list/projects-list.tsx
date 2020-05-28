import React from 'react';
import { Project } from 'types/project';
import { ProjectItem } from './project-item';
import styles from './project-list.module.scss';

interface ProjectssListProps {
    projects: Project[];
}
export const ProjectsList = ({ projects }: ProjectssListProps) => (
    <div>
        {projects.map(project => (
            <ProjectItem
                project={project}
                key={project.id}
                className={styles.project__item}
            />
        ))}
    </div>
);
