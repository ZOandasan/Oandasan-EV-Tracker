const SaveFile = require('../../models/saveFile');

module.exports = {
    create,
};

async function create(req, res){
    const saveFile = await SaveFile.findById(req.params.id)
    saveFile.pokemon.push(req.body);
    await saveFile.save();
    res.json(saveFile);
}