const express = require('express');

const router = express.Router();

router.post('/login', (req, res) => {
    res.status(200).json({
        error: false,
        token:
            'dksfldskfjdsklfjdskljfsdlkfjld.jsdfklfjsdkljfklsd.jsdklfjdsklfj',
        userName: 'vaniafed'
    });
});

router.post('/register', (req, res) => {
    res.status(200).json({
        error: false,
        token:
            'dksfldskfjdsklfjdskljfsdlkfjld.jsdfklfjsdkljfklsd.jsdklfjdsklfj',
        userName: 'vaniafed'
    });
});

module.exports = router;
