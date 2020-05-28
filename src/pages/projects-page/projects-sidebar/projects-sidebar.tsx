import React from 'react';
import { Project } from 'src/types/project';
import { SidebarSection } from './sidebar-section';
import styles from './projects-sidebar.module.scss';

const getProjectsStatistics = (projects: Project[]) => {
    const projectsStatus: any[] = [
        {
            text: 'in progress',
            number: 0
        },
        {
            text: 'passed',
            number: 0
        },
        {
            text: 'failed',
            number: 0
        }
    ];
    const coverageStatus: any[] = [
        {
            text: '>= 80%',
            number: 0
        },
        {
            text: '50-80%',
            number: 0
        },
        {
            text: '20-50%',
            number: 0
        },
        {
            text: '< 20%',
            number: 0
        }
    ];

    const classChangesPercentStatus: any[] = [
        {
            text: '>= 80%',
            number: 0
        },
        {
            text: '50-80%',
            number: 0
        },
        {
            text: '20-50%',
            number: 0
        },
        {
            text: '< 20%',
            number: 0
        }
    ];

    projects.forEach(project => {
        switch (project.status) {
            case 'in progress': {
                projectsStatus[0].number += 1;
                break;
            }
            case 'passed': {
                projectsStatus[1].number += 1;
                break;
            }
            case 'failed': {
                projectsStatus[2].number += 1;
                break;
            }
            default: {
                break;
            }
        }
        if (project.coveragePercent >= 80) {
            coverageStatus[0].number += 1;
        } else if (
            project.coveragePercent < 80 &&
            project.coveragePercent >= 50
        ) {
            coverageStatus[1].number += 1;
        } else if (
            project.coveragePercent < 50 &&
            project.coveragePercent >= 20
        ) {
            coverageStatus[2].number += 1;
        } else {
            coverageStatus[3].number += 1;
        }
        if (project.classChangesPercent >= 80) {
            classChangesPercentStatus[0].number += 1;
        } else if (
            project.classChangesPercent < 80 &&
            project.classChangesPercent >= 50
        ) {
            classChangesPercentStatus[1].number += 1;
        } else if (
            project.classChangesPercent < 50 &&
            project.classChangesPercent >= 20
        ) {
            classChangesPercentStatus[2].number += 1;
        } else {
            classChangesPercentStatus[3].number += 1;
        }
    });
    return {
        projectsStatus,
        coverageStatus,
        classChangesPercentStatus
    };
};

interface ProjectsSidebarProps {
    projects: Project[];
}
export const ProjectsSidebar = ({ projects }: ProjectsSidebarProps) => {
    // accamulate
    const {
        projectsStatus,
        coverageStatus,
        classChangesPercentStatus
    } = getProjectsStatistics(projects);
    return (
        <div>
            <SidebarSection
                title="Project status"
                testAttributes={projectsStatus}
                className={styles.sidebar__section}
            />
            <SidebarSection
                title="Coverage status"
                testAttributes={coverageStatus}
                className={styles.sidebar__section}
            />
            <SidebarSection
                title="Class' changes percent"
                testAttributes={classChangesPercentStatus}
                className={styles.sidebar__section}
            />
        </div>
    );
};
