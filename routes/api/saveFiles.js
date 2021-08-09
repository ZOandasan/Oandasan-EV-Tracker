const express = require('express');
const router = express.Router();
const saveFilesCtrl = require('../../controllers/api/saveFiles');

router.post('/create', saveFilesCtrl.createSave);

module.exports = router;