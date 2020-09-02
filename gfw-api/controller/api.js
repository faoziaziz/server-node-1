/* just dependency for mongo client*/
const mongoose = require('mongoose');
var url = 'mongodb://faoziaziz:Azizkeren1234@ds155080.mlab.com:55080/prasimax_test'

/* just reply ok */
exports.ok_reply = function (req, res) {
    /* told you to ok replied*/
    res.send("OK replied")

}


/* test post */
exports.test_post = function (req, res) {
    /* told to test post*/
    res.send("POST sukses.\n ")

}

exports.test_body = function (req, res) {
    /* told to test body*/
    res.send(req.body.param1);

}

exports.test_json = function (req, res) {
    /* 
       this for test the json body 
       this will extract all json body
    */

    res.send(req.body)
}

exports.test_mongo = function (req, res) {

    /* this for connection to mongo */

    mongoose.connect(url, { useNewUrlParser: true })
    const db = mongoose.connection;
    try {
        db.on('error', console.error.bind(console, 'conncetion erorr'))
       db.once('open', function () {
            res.json({
                "kode": 200,
                "status": "Mantap Jiva"
            })
        })

    } catch (err) {
        res.json({
            "kode": 69,
            "status": err
        })
    } finally {
        db.close()
    }



}

exports.rest_json_test = function (req, res) {
    res.json({
        "kode": 200,
        "mantap": "pisan"
    })

}
