var express = require('express');
var router = express.Router();
var cors = require('cors')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/simple-request', function(req, res, next) {
  res.send("hello");
});

router.options('/preflighted-request', cors({
  origin: true
}));
router.get('/preflighted-request', cors({origin: true}), function(req, res, next) {
  res.json({hello: "world"});
});

router.options('/preflighted-request-cache', cors({
  origin: true,
  maxAge: 86400
}));
router.get('/preflighted-request-cache', cors({origin: true, maxAge: 86400}), function(req, res, next) {
  res.json({hello: "world"});
});

module.exports = router;
