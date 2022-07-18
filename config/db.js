
const { MongoClient, ServerApiVersion } = require('mongodb');
const { clearScreenDown } = require('readline');
const uri = "mongodb+srv://Raghu:raghu@cluster0.yewwe.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {

    if (!err) {
        const collection = client.db("test").collection("devices");
        console.log("collection", collection);
    } else {
        console.log("err", err);
    }
    // perform actions on the collection object
    client.close();
});clearScreenDown
