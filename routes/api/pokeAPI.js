const express = require('express');
const router = express.Router();
const pokeAPICtrl = require('../../controllers/api/APIPokemon');

router.get('/:id', pokeAPICtrl.showOne);

module.exports = router;