var express = require('express');
var router = express.Router();
var contApi = require('../controller/api')


/* GET home page. */
router.get('/mantan', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Check for more */
router.get("/apix", function(req, res, next){
    res.send("hello world");

});


router.get("/locations", function(req, res, next){
    /* just for get methode */
    res.send("this will get locations bye bye");
});

router.post("/locations", function(req, res, next){
    /* just for post methode*/
    res.send("this is post methode bey bey");
})

module.exports = router;
