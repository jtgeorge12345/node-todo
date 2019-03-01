const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID;
console.log(obj);
MongoClient.connect( "mongodb://localhost:27017/TodoApp", (err, client) =>  {
  if (err) {
    return console.log("unable to connect to db");
  }

  console.log("Connected successfully.");
  const db = client.db('todoApp');

  db.collection("Users").find({name:'Jason'}).count().then((count) => {
    console.log('Users Count', count);
  }, (err) => {
    console.log("error!", err);
  });

  client.close();
});
