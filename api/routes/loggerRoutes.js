const express = require('express');
const router = express.Router();
const loggerController = require('../controllers/loggerController')



// POST /jobs - create a new job
router.post('/admin',  loggerController.adminLogger);
router.post('/client', loggerController.clientLogger);


module.exports = router;
