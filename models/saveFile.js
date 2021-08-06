const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = newSchema({
    species: {type: String, required: true},
    nickname: String,
    level: {
        type: Number,
        min: 1,
        max: 100,
        default: 5,
    },
    hpEV: {
        type: Number,
        min: 1,
        max: 255,
        default: 0,
    },
    atkEV: {
        type: Number,
        min: 1,
        max: 255,
        default: 0,
    },
    defEV: {
        type: Number,
        min: 1,
        max: 255,
        default: 0,
    },
    spAtkEV: {
        type: Number,
        min: 1,
        max: 255,
        default: 0,
    },
    spDefEV: {
        type: Number,
        min: 1,
        max: 255,
        default: 0,
    },
    spdEV: {
        type: Number,
        min: 1,
        max: 255,
        default: 0,
    },
})

const saveFileSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    region: {
        type: String,
        enum: ['Kanto', 'Jhoto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola'],
        default: 'Kanto',
    },
    generation: {
        type: Number,
        min: 1,
        max: 7,
        default: 1,
    },
    isNuzlock: {
        type: Boolean,
        default: false,
    },
    pokemon:
        [pokemonSchema]
    ,
}, {
    timestamps: true
});

module.exports = mongoose.model('saveFile', saveFileSchema);