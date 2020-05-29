const express = require('express');

const router = express.Router();

router.use('/', [
    require('./projects.routes'),
    require('./history.routes'),
    require('./common.routes')
]);

module.exports = router;
