var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Suman Debnath' });
});

router.get('/demoDemo', function(req, res, next){
  res.send("demoDemo");
});

module.exports = router;
