const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({

    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirect: {
        type: String,
        requires: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],


},
{timestamps: true}
);

const URL = mongoose.model('url', urlSchema);

module.exports = URL;