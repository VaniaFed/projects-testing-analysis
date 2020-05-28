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
router.get('/projects/', (req, res) => {
    res.status(200).json(projects);
});

router.get('/projects/:id', (req, res) => {
    const { id } = req.params;

    const selectedProject = projects.filter(project => project.id === id)[0];
    res.status(200).json(selectedProject);
});

module.exports = router;
