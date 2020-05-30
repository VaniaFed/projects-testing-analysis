const express = require('express');

const router = express.Router();

router.post('/login', (req, res) => {
    const { login, password } = req.body;
    console.log(login, password);

    res.status(200).json({ error: false });
});

router.post('/register', (req, res) => {
    console.log(req.body);

    res.status(200).json({ error: false });
});

module.exports = router;
