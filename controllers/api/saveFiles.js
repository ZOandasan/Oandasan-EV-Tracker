const SaveFile = require('../../models/saveFile');

module.exports = {
    createSave,
};

async function createSave(req, res){
    const saveFile = await SaveFile.addSave(req.user._id);
    await saveFile.save();
    res.json(saveFile);
}