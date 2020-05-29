import React, { useEffect, useState } from 'react';
import { Project } from 'types/project';
import { LayoutWithSidebar } from 'layouts/layout-with-sidebar';
import { SidebarLayout } from 'layouts/sidebar-layout';
import { useParams } from 'react-router-dom';
import { Header } from 'components/header';
import { getProject } from './api/get-project';
import { ProjectSidebar } from './project-sidebar';
import { getHistory } from './api/get-history';
import styles from './project-page.module.scss';
import { Table } from './table';

export const ProjectPage = () => {
    const projectId = (useParams() as any).id;

    const [project, setProject] = useState<Project>(null);
    const [history, setHistory] = useState(null);

    useEffect(() => {
        getProject(projectId).then(project => setProject(project));
        getHistory(projectId).then(history => setHistory(history));
    }, []);

    return (
        <div>
            <Header className={styles['project-page__header']} />
            <LayoutWithSidebar sidebarPosition="right">
                {project && (
                    <Table
                        before={(project as any).before}
                        after={(project as any).after}
                    />
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
