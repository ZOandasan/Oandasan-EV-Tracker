const express = require('express');
const router = express.Router();
const saveFilesCtrl = require('../../controllers/api/saveFiles');
const pokemonCtrl = require('../../controllers/api/userPokemon');

router.post('/create', saveFilesCtrl.createSave);
router.post('/history', saveFilesCtrl.showAll);
router.post('/:id', saveFilesCtrl.showOne);
router.post('/:id/pokemon/create', pokemonCtrl.create);

module.exports = router;