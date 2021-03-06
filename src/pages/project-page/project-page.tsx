import React, { useEffect, useState } from 'react';
import { Project } from 'types/project';
import { LayoutWithSidebar } from 'layouts/layout-with-sidebar';
import { SidebarLayout } from 'layouts/sidebar-layout';
import { useParams } from 'react-router-dom';
import { Header } from 'components/header';
import { getProject } from '../../common/api/get-project';
import { getHistory } from '../../common/api/get-history';
import { ProjectSidebar } from './project-sidebar';
import styles from './project-page.module.scss';
import { Table } from './table';
import { ProjectPageHeader } from './project-page-header';
import { startAnalysis } from './api/start-analysis';

export const ProjectPage = () => {
    const projectId = (useParams() as any).id;

    const [project, setProject] = useState<Project>(null);
    const [history, setHistory] = useState(null);

    useEffect(() => {
        getProject(projectId).then(project => setProject(project));
        getHistory(projectId).then(history => setHistory(history));
    }, []);

    const buttonStartAnalysis = (
        <button
            onClick={() => {
                startAnalysis(projectId).then(() => {
                    if (project) {
                        const newProject: Project = {
                            ...project,
                            status: 'in progress'
                        };
                        setProject(newProject);
                    }
                });
            }}
            className={styles['project-page__start-analysis']}
        >
            Start analysis
        </button>
    );
    const labelInProgress = (
        <div className={styles['project-page__label-status']}>
            Analysis is in progress
        </div>
    );

    return (
        <div>
            <Header className={styles['project-page__header']} />
            <LayoutWithSidebar sidebarPosition="right">
                {project && (
                    <div>
                        {project.status === 'in progress'
                            ? labelInProgress
                            : buttonStartAnalysis}
                        <ProjectPageHeader
                            projectName={project.name}
                            branchName={(project as any).branchName}
                            version={(project as any).version}
                            lastUpdate={project.dateLastUpdate}
                            className={styles['project-page-content__header']}
                        />
                        <Table
                            before={(project as any).before}
                            after={(project as any).after}
                        />
                    </div>
                )}
                <SidebarLayout>
                    {project && history && (
                        <ProjectSidebar project={project} history={history} />
                    )}
                </SidebarLayout>
            </LayoutWithSidebar>
        </div>
    );
};
