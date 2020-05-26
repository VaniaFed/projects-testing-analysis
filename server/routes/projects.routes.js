const express = require('express');

const router = express.Router();

const projects = [
    {
        id: '1',
        name: 'Drill',
        numberOfCommits: 56
    },
    {
        id: '2',
        name: 'Amway',
        numberOfCommits: 103
    }
];
router.get('/projects/', (req, res) => {
    res.status(200).json(projects);
});

router.get('/projects/:id', async (req, res) => {
    const { id } = req.params;

    const selectedProject = projects.filter(project => project.id === id);
    res.status(200).json({ project: selectedProject });
});

module.exports = router;
