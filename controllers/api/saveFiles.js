const SaveFile = require('../../models/saveFile');

module.exports = {
    createSave,
    history,
};

async function createSave(req, res){
    req.body.user = req.user._id;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const saveFile = await SaveFile.create(req.body);
    res.json(saveFile);
}

async function history(req, res){
    const saveFiles = await SaveFile
        .find({ user: req.user._id })
    res.json(saveFiles);
}
