import React from 'react';
import { Project } from 'src/types/project';
import { Panel } from 'components/panel';
import { TestAttribute } from 'types/test-attribute';
import { mixClasses } from 'src/components/panel/panel';
import { Link } from 'react-router-dom';
import styles from './project-item.module.scss';

const formCardsData = (project: Project) => {
    const cardsData: TestAttribute[] = [
        {
            number: String(project.numberOfBugs),
            text: 'Bugs'
        },
        {
            number: `${project.coveragePercent}%`,
            text: 'Coverage'
        }
    ];
    return cardsData;
};

interface ProjetItemProps {
    project: Project;
    className?: string;
}

export const ProjectItem = ({ project, className }: ProjetItemProps) => {
    const projectPanelData: TestAttribute[] = formCardsData(project);
    return (
        <div className={mixClasses(styles.project, className)}>
            <div className={styles.project__header}>
                <Link
                    to={`/projects/${project.id}`}
                    className={styles.project__name}
                >
                    {project.name}
                </Link>
                <span
                    className={`${styles.project__status} ${
                        project.status === 'passed'
                            ? styles['project__status--green']
                            : styles['project__status--red']
                    }`}
                >
                    {project.status}
                </span>
            </div>
            <div className={styles.project__content}>
                <div className={styles['project-left-statistics']}>
                    <Panel cards={projectPanelData} />
                </div>
                <div className={styles['project-right-statistics']}>
                    <div className={styles['project__last-update']}>
                        last update {project.dateLastUpdate}
                    </div>
                    <div className={styles['project__last-change']}>
                        last change {project.dateLastChange}
                    </div>
                    <div className="project__info">
                        <div className="project__number-of-lines">
                            {project.numberOfLinesOfCode}
                        </div>
                        <div className="project__language">
                            {project.programmingLanguage}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
