const express = require('express');
const router = express.Router();
const saveFilesCtrl = require('../../controllers/api/saveFiles');
const pokemonCtrl = require('../../controllers/api/userPokemon');

router.post('/create', saveFilesCtrl.createSave);
router.post('/history', saveFilesCtrl.showAll);
router.post('/:id', saveFilesCtrl.showOne);
router.delete('/delete/:id', saveFilesCtrl.deleteOne);
router.post('/:id/pokemon/create', pokemonCtrl.create);
router.delete('/:saveId/pokemon/delete/:pokeId', pokemonCtrl.deleteOne);
router.put('/:saveId/pokemon/update/:pokeId/:stat/:value', pokemonCtrl.edit);

module.exports = router;