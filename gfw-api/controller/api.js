
/* just dependency for mongo client*/
const {MongoClient} = require('mongodb')
/*const url for access the server */
const uri = "mongodb+srv://faoziaziz:Azizkeren1234@cluster0.rka7w.mongodb.net/test?retryWrites=true&w=majority"


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

exports.test_mongo = async function(req, res){
    const client=new MongoClient(uri)
        try {
	await client.connect();
	    await listDatabases(client)
	     res.send("mantap")

    }
    catch (e) {
	res.send(e)
    }
    finally {
	await client.close()
	 //res.send("test mongo")

    }
   

}

exports.rest_json_test = function(req, res){
    res.json({"mantap": "pisan"})

}
