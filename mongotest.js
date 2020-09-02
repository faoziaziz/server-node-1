const {MongoClient} = require('mongodb');

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     * mongodb://<dbuser>:<dbpassword>@ds155080.mlab.com:55080/prasimax_test
     */
    const uri = "mongodb+srv://faoziaziz:Azizkeren1234@ds155080.mlab.com:55080/prasimax_test?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
