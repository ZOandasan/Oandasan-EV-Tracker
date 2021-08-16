const SaveFile = require('../../models/saveFile');

module.exports = {
    create,
    deleteOne,
    edit,
};

async function create(req, res){
    const saveFile = await SaveFile.findById(req.params.id);
    saveFile.pokemon.push(req.body);
    saveFile.pokemon['species'] = req.params.species; //Added This Line modeled after line 27. This is the issue.
    await saveFile.save();
    res.json(saveFile);
}

async function deleteOne(req, res){
    const saveFile = await SaveFile.findOne( {_id: req.params.saveId } )
    saveFile.pokemon.remove(req.params.pokeId);
    await saveFile.save();
    res.json(saveFile);
}

async function edit(req, res){
    const saveFile = await SaveFile.findOne( {_id: req.params.saveId } )
    const pokeInst = saveFile.pokemon.id(req.params.pokeId)
    pokeInst[req.params.stat] = req.params.value;
    await saveFile.save();
    res.json(saveFile);
}