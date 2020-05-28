import React, { useEffect, useState } from 'react';
import { Project } from 'types/project';
import { LayoutWithSidebar } from 'layouts/layout-with-sidebar';
import { SidebarLayout } from 'layouts/sidebar-layout';
import { getProjects } from './api/get-projects';
import { ProjectsList } from './projects-list';
import { ProjectsSidebar } from './projects-sidebar';

export const ProjectsPage = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        getProjects().then(projects => setProjects(projects));
    });

    return (
        <div>
            <LayoutWithSidebar>
                <SidebarLayout>
                    <ProjectsSidebar projects={projects} />
                </SidebarLayout>
                <main className="main-content">
                    <ProjectsList projects={projects} />
                </main>
            </LayoutWithSidebar>
        </div>
    );
};
