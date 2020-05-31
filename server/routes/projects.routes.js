const express = require('express');

const router = express.Router();

const projects = [
    {
        id: '1',
        name: 'Drill',
        programmingLanguage: 'js',
        coveragePercent: 0,
        dateLastChange: '24.02.2000',
        dateLastUpdate: '24.02.2000',
        numberOfBugs: 12,
        numberOfLinesOfCode: 100,
        classChangesPercent: 13,
        status: 'passed'
    },
    {
        id: '2',
        name: 'Amway',
        programmingLanguage: 'ts',
        coveragePercent: 20,
        dateLastChange: '25.02.2000',
        dateLastUpdate: '24.02.2000',
        numberOfBugs: 123,
        numberOfLinesOfCode: 10034,
        classChangesPercent: 56,
        status: 'failed'
    }
];

const tmpLines = `import React, { useEffect, useState } from 'react';
import { File } from 'components/file';
import { Header } from 'components/header';
import { mixClasses } from 'src/components/panel/panel';
import { useParams } from 'react-router-dom';
import styles from './file-page.module.scss';
import { getFile } from './api/get-file';

export const FilePage = () => {
    const { projectId, fileId } = useParams();
    const [file, setFile] = useState(null);

    useEffect(() => {
        (async () => {
            const fileFromBackend = await getFile(projectId, fileId);

            setFile(fileFromBackend);
        })();
    }, []);

    return (
        <div>
            <Header className={styles['file-page__header']} />
            <div
                className={mixClasses(
                    'container',
                    styles['file-page__content']
                )}
            >
                {file && <File file={file} />}
            </div>
        </div>
    );
};
`;
const file = {
    name: 'index.html',
    lines: tmpLines.split(/\n/).map(line => ({
        content: line
    }))
};

file.lines[3].color = 'red';
file.lines[4].color = 'red';
file.lines[5].color = 'red';
file.lines[6].color = 'red';
file.lines[1].color = 'green';
file.lines[2].color = 'green';
file.lines[12].color = 'green';
file.lines[13].color = 'green';
file.lines[14].color = 'green';
file.lines[15].color = 'green';
file.lines[16].color = 'green';
file.lines[17].color = 'green';
file.lines[18].color = 'green';
file.lines[19].color = 'green';

router.get('/projects/', (req, res) => {
    res.status(200).json({ projects });
});

router.get('/projects/:id', (req, res) => {
    const { id } = req.params;

    const selectedProject = projects.filter(project => project.id === id)[0];
    res.status(200).json({ selectedProject });
});

router.get('/projects/:projectId/files/:fileId', (req, res) => {
    console.log(req.params);

    res.status(200).json({ file });
});

router.post('/import-project/', (req, res) => {
    console.log(req.body);

    res.status(201).json({ error: false, message: '' });
});

module.exports = router;
