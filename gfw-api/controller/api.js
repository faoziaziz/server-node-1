

/* just reply ok */

exports.ok_reply = function(req, res){
    /* told you to ok replied*/
    res.send("OK replied")

}

exports.test_post = function (req, res){
    /* told to test post*/
    res.send("POST sukses.\n ")

}

exports.test_body = function(req, res){
    /* told to test body*/
    res.send(req.body.param1);

}

exports.test_json = function(req, res){
    /* 
       this for test the json body 
       this will extract all json body
     */
    res.send(req.body)
}
