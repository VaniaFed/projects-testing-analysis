import React from 'react';
import { Project } from 'src/types/project';
import { SidebarSection } from 'pages/projects-page/projects-sidebar/sidebar-section';
import { TestAttribute } from 'src/types/test-attribute';

interface ProjectSidebarProps {
    project: Project;
    history: any[];
    className?: string;
}

export const ProjectSidebar = ({ project, history }: ProjectSidebarProps) => {
    const linesOfCode: TestAttribute = {
        text: 'Number of lines of code',
        number: project.numberOfLinesOfCode
    };

    const projectActivity: TestAttribute[] = [
        {
            text: 'Last update',
            number: project.dateLastUpdate
        },
        {
            text: 'Last change',
            number: project.dateLastChange
        }
    ];

    const transformProjectHistory = (history: any) =>
        history.map((historyItem: any) => ({
        text: historyItem.action,
        number: historyItem.date
    }));

    const projectHistory: TestAttribute[] = transformProjectHistory(history);
    return (
        <div>
            <SidebarSection
                title="About project"
                testAttributes={[linesOfCode]}
            />
            <SidebarSection
                title="Project activity"
                testAttributes={projectActivity}
            />
            <SidebarSection title="History" testAttributes={projectHistory} />
        </div>
    );
};
