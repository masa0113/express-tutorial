var express = require('express');
var router = express.Router();
var load_csv = require('../db/load_csv.js')


var inputFilePath = './data/jukenresult.csv'


/* GET home page. */
router.get('/', function (req, res, next) {
    load_csv(inputFilePath)
        .then(function (data) {
            res.send(data)
        })
});


module.exports = router;