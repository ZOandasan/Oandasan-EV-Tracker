const SaveFile = require('../../models/saveFile');

module.exports = {
    createSave,
};

async function createSave(req, res){
    req.body.user = req.user._id;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const saveFile = await SaveFile.create(req.body);
    res.json(saveFile);
}
