var express = require('express');
var router = express.Router();


router.get('/projects', function(req, res, next) {
  res.sendFile(path.join(__dirname, '/client/build/index.html'), function(err) {
         if (err) {
           res.status(500).send(err)
         }
       });
});

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '/client/build/index.html'), function(err) {
         if (err) {
           res.status(500).send(err)
         }
       });
});

module.exports = router;
