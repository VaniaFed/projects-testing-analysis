import React from 'react';
import { Project } from 'types/project';

interface ProjectssListProps {
    projects: Project[];
}
export const ProjectsList = ({ projects }: ProjectssListProps) => {
    console.log(projects);

    return <div>list</div>;
};
