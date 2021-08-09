const express = require('express');
const router = express.Router();
const saveFilesCtrl = require('../../controllers/api/saveFiles');

router.get('/saveFile/create', saveFilesCtrl.createSave);

module.exports = router;