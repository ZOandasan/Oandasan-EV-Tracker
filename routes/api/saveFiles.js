const express = require('express');
const router = express.Router();
const saveFilesCtrl = require('../../controllers/api/saveFiles');

router.post('/create', saveFilesCtrl.createSave);
router.post('/history', saveFilesCtrl.showAll);
router.post('/:id', saveFilesCtrl.showOne);

module.exports = router;