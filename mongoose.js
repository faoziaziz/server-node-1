const mongoose = require('mongoose');
var url = 'mongodb://faoziaziz:Azizkeren1234@ds155080.mlab.com:55080/prasimax_test'
mongoose.connect(url, {useNewUrlParser: true})

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'conncetion erorr'))
db.once('open', function(){
    console.log("jelek")
});
