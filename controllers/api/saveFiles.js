const SaveFile = require('../../models/saveFile');

module.exports = {
    createSave,
    showAll,
    showOne,
    deleteOne,
};

async function createSave(req, res){
    req.body.user = req.user._id;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const saveFile = await SaveFile.create(req.body);
    res.json(saveFile);
}

async function showAll(req, res){
    const saveFiles = await SaveFile
        .find({ user: req.user._id })
    res.json(saveFiles);
}

async function showOne(req, res){
    const saveFile = await SaveFile.findById(req.params.id)
    res.json(saveFile);
}

async function deleteOne(req, res){
    const saveFile = await SaveFile.findOneAndDelete( {_id: req.params.id } )
    res.json('Game Deleted');
}