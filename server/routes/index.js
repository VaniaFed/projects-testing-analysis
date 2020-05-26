const express = require('express');

const router = express.Router();

router.use('/', [require('./projects.routes')]);

module.exports = router;
