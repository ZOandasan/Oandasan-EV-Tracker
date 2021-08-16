const express = require('express');
const router = express.Router();
const saveFilesCtrl = require('../../controllers/api/saveFiles');
const pokemonCtrl = require('../../controllers/api/userPokemon');

router.post('/create', saveFilesCtrl.createSave);
router.post('/history', saveFilesCtrl.showAll);
router.post('/:id', saveFilesCtrl.showOne);
router.delete('/delete/:id', saveFilesCtrl.deleteOne);
router.post('/:id/pokemon/create/:species', pokemonCtrl.create);
router.delete('/:saveId/pokemon/delete/:pokeId', pokemonCtrl.deleteOne);
router.put('/:saveId/pokemon/updateEV/:pokeId/:stat/:value', pokemonCtrl.editEV);
router.put('/:saveId/pokemon/updateLevel/:pokeId/:level', pokemonCtrl.editLevel);

module.exports = router;