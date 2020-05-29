import React, { useEffect, useState } from 'react';
import { Project } from 'types/project';
import { LayoutWithSidebar } from 'layouts/layout-with-sidebar';
import { SidebarLayout } from 'layouts/sidebar-layout';
import { Header } from 'components/header';
import { getProjects } from './api/get-projects';
import { ProjectsList } from './projects-list';
import { ProjectsSidebar } from './projects-sidebar';
import styles from './projects-page.module.scss';

export const ProjectsPage = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        getProjects().then(projects => setProjects(projects));
    });

    return (
        <div>
            <Header className={styles['projects-page__header']} />
            <LayoutWithSidebar>
                <SidebarLayout>
                    <ProjectsSidebar projects={projects} />
                </SidebarLayout>
                <ProjectsList projects={projects} />
            </LayoutWithSidebar>
        </div>
    );
};
