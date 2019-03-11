var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/messages', (req, res, next) => {
  res.send('hello');
});

router.get('/messages/:id', (req, res) => {
  res.send('message ' + req.params.id);
})
module.exports = router;
