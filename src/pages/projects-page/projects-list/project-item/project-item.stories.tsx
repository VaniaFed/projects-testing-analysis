import React from 'react';
import { storiesOf } from '@storybook/react';

import { Project } from 'types/project';
import { ProjectItem } from './index';

const passedProject: Project = {
    id: '1',
    name: 'Drill',
    programmingLanguage: 'js',
    coveragePercent: 0,
    dateLastChange: '24.02.2000',
    dateLastUpdate: '24.02.2000',
    numberOfBugs: 12,
    numberOfLinesOfCode: 100,
    classChangesPercent: 12,
    status: 'passed'
};

const failedProject: Project = {
    id: '2',
    name: 'Amway',
    programmingLanguage: 'ts',
    coveragePercent: 20,
    dateLastChange: '25.02.2000',
    dateLastUpdate: '24.02.2000',
    numberOfBugs: 123,
    numberOfLinesOfCode: 10034,
    classChangesPercent: 10,
    status: 'failed'
};

storiesOf('ProjectItem', module)
    .add('passed project', () => <ProjectItem project={passedProject} />)
    .add('failed project', () => <ProjectItem project={failedProject} />);
