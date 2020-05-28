const express = require('express');

const router = express.Router();

router.use('/', [require('./projects.routes'), require('./history.routes')]);

module.exports = router;
