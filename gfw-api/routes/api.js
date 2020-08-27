var express = require('express');
var router = express.Router();
var contApi = require('../controller/api')


/* GET home page. */
router.get('/mantan', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Check for more */
router.get("/apix", contApi.ok_reply);
router.post("/testpost", contApi.test_post)
router.post("/testbody", contApi.test_body)
router.post("/testjson", contApi.test_json)


/* Check location */
router.get("/locations", function(req, res, next){
    /* just for get methode */
    res.send("this will get locations bye bye");
});

router.post("/locations", function(req, res, next){
    /* just for post methode*/
    res.send("this is post methode bey bey");
})

module.exports = router;
