import React, { useEffect, useState } from 'react';
import { Project } from 'types/project';
import { LayoutWithSidebar } from 'layouts/layout-with-sidebar';
import { SidebarLayout } from 'layouts/sidebar-layout';
import { useParams } from 'react-router-dom';
import { Header } from 'components/header';
import { getProject } from './api/get-project';
import { ProjectSidebar } from './project-sidebar';
import { getHistory } from './api/get-history';

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
            <Header />
            <LayoutWithSidebar sidebarPosition="right">
                <main className="main-content">
                    {/* <ProjectsList project={project} /> */}
                    smain
                </main>
                <SidebarLayout>
                    {project && history && (
                        <ProjectSidebar project={project} history={history} />
                    )}
                </SidebarLayout>
            </LayoutWithSidebar>
        </div>
    );
};
