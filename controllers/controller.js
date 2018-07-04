const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.Articles.find(req.query)
            .sort({date: -1})
            .then(result => res.json(result))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res){
        db.Articles.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res){
        db.Articles.findbyId({_id: req.params.id})
        .then(result => result.remove())
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err));
    }
};