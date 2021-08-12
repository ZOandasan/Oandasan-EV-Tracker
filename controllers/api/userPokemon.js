const SaveFile = require('../../models/saveFile');

module.exports = {
    create,
    deleteOne,
};

async function create(req, res){
    const saveFile = await SaveFile.findById(req.params.id)
    saveFile.pokemon.push(req.body);
    await saveFile.save();
    res.json(saveFile);
}

async function deleteOne(req, res){
    const saveFile = await SaveFile.findOne( {_id: req.params.saveId } )
    saveFile.pokemon.remove(req.params.pokeId);
    await saveFile.save();
    res.json(saveFile);
}