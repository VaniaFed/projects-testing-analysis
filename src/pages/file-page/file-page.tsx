import React, { useEffect, useState } from 'react';
import { File } from 'components/file';
import { Header } from 'components/header';
import { useParams, Link } from 'react-router-dom';
import { LayoutWithSidebar } from 'layouts/layout-with-sidebar';
import { SidebarLayout } from 'layouts/sidebar-layout';
import styles from './file-page.module.scss';
import { getFile } from './api/get-file';
import { getProject } from '../../common/api/get-project';
import { getHistory } from '../../common/api/get-history';
import { ProjectSidebar } from '../project-page/project-sidebar';

export const FilePage = () => {
    const { projectId, fileId } = useParams();
    const [file, setFile] = useState(null);
    const [project, setProject] = useState(null);
    const [history, setHistory] = useState(null);

    useEffect(() => {
        getFile(projectId, fileId).then(file => setFile(file));
        getProject(projectId).then(project => setProject(project));
        getHistory(projectId).then(history => setHistory(history));
    }, []);

    return (
        <div>
            <Header className={styles['file-page__header']} />
            <LayoutWithSidebar sidebarPosition="right">
                {project && (
                    <div>
                        <div className={styles['file-page__content']}>
                            <h2 className={styles['file-page__project-title']}>
                                Project{' '}
                                <Link to={`/projects/${project.id}`}>
                                    {project.name}
                                </Link>
                            </h2>
                            {file && <File file={file} />}
                        </div>
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
