const express = require('express');
const router = express.Router();
const pokemonCtrl = require('../../controllers/api/saveFiles');

router.post('/create', pokemonCtrl.create);

module.exports = router;