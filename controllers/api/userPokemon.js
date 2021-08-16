const SaveFile = require('../../models/saveFile');

module.exports = {
    create,
    deleteOne,
    editEV,
    editLevel,
};

async function create(req, res){
    const saveFile = await SaveFile.findById(req.params.id);
    req.body.species = req.params.species; 
    saveFile.pokemon.push(req.body);
    await saveFile.save();
    res.json(saveFile.pokemon);
}

async function deleteOne(req, res){
    const saveFile = await SaveFile.findOne( {_id: req.params.saveId } )
    saveFile.pokemon.remove(req.params.pokeId);
    await saveFile.save();
    res.json(saveFile);
}

async function editEV(req, res){
    const saveFile = await SaveFile.findOne( {_id: req.params.saveId } )
    const pokeInst = saveFile.pokemon.id(req.params.pokeId)
    pokeInst[req.params.stat] = req.params.value;
    await saveFile.save();
    res.json(saveFile);
}

async function editLevel(req, res){
    const saveFile = await SaveFile.findOne( {_id: req.params.saveId } )
    const pokeInst = saveFile.pokemon.id(req.params.pokeId)
    pokeInst['level'] = req.params.level;
    await saveFile.save();
    res.json(saveFile);
}