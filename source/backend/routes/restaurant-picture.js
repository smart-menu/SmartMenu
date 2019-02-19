var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

const database = require("../database.js");

/* GET restaurant listing. */
router.get('/:id', function(req, res, next) {
    if(req.params.id) {
        if(!fs.existsSync(path.join(__dirname, '../images/restaurants/', req.params.id + '.png'))) {
            res.status(404).send('Not found: ' + req.params.id + ".png");
        }
        else {
            res.sendFile(path.join(__dirname, '../images/restaurants/', req.params.id + '.png'));
        }
    }
    else
        res.status(404).send('Not found');
});

module.exports = router;