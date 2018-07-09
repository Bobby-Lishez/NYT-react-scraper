const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Article = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: new Date()
    }
});

const Articles = mongoose.model('Articles', Article);

module.exports = Articles;