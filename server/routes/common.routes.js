const express = require('express');

const router = express.Router();

const history = [
    {
        action: 'Analisys',
        date: '13.05.2020 15:44'
    },
    {
        action: 'Analisys',
        date: '13.05.2020 15:44'
    },
    {
        action: 'Analisys',
        date: '13.05.2020 15:44'
    }
];

const projectInfo = {
    branchName: 'master',
    version: '1.0',
    before: {
        percent: '29.5%',
        topFiles: [
            {
                name: 'index.ts',
                changes: 25,
                bugs: 4
            },
            {
                name: 'userTable.tsx',
                changes: 34,
                bugs: 12
            }
        ],
        potentialBugs: [
            {
                name: 'index.ts',
                changes: 25,
                bugs: 4,
                coverage: 24
            },
            {
                name: 'userTable.tsx',
                changes: 34,
                bugs: 12,
                coverage: 12
            }
        ]
    },
    after: {
        percent: '20%',
        topFiles: [
            {
                name: 'index.ts',
                changes: 25,
                newChanges: 4,
                bugs: 4,
                newBugs: 3,
                coverage: '25%'
            },
            {
                name: 'userTable.tsx',
                changes: 34,
                newChanges: 6,
                bugs: 12,
                newBugs: 5,
                coverage: '25%'
            }
        ],
        potentialBugs: [
            {
                name: 'index.ts',
                changes: 28,
                bugs: 2,
                coverage: 28
            },
            {
                name: 'userTable.tsx',
                changes: 36,
                bugs: 13,
                coverage: 15
            }
        ],
        newCodeLines: 23
    }
};

router.get('/history', (req, res) => {
    res.status(200).json(history);
});

router.get('/project-info', (req, res) => {
    res.status(200).json(projectInfo);
});

module.exports = router;
