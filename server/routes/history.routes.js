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

router.get('/history', (req, res) => {
    res.status(200).json(history);
});

module.exports = router;
