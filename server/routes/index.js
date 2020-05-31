const express = require('express');

const router = express.Router();

router.use('/', [
    require('./projects.routes'),
    require('./common.routes'),
    require('./auth.routes')
]);

module.exports = router;
