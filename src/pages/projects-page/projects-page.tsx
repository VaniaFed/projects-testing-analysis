import React, { useEffect, useState } from 'react';
import { Button } from 'components/index';
import { Project } from 'types/project';
import { getProjects } from './api/get-projects';
import { ProjectsList } from './projects-list';

export const ProjectsPage = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        getProjects().then(projects => {
            setProjects(projects);
        });
    }, []);

    return (
        <div>
            <h1>Register page</h1>
            <ProjectsList projects={projects} />
            <Button text="Load projects" />
        </div>
    );
};
