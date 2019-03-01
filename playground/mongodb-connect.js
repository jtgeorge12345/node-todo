const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID;
console.log(obj);
MongoClient.connect( "mongodb://localhost:27017/TodoApp", (err, client) =>  {
  if (err) {
    return console.log("unable to connect to db");
  }

  console.log("Connected successfully.");
  const db = client.db('todoApp');

  // db.collection('Todos').insertOne({
  //   text: "Something to do",
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     console.log("error", err);
  //   } else {
  //     console.log("Success", JSON.stringify(result.ops, undefined, 2));
  //   }
  // });

  // db.collection("Users").insertOne({
  //   name: "Jason",
  //   age: 22,
  //   location: 'CA'
  // }, (err, result) => {
  //   if (err) {
  //     console.log('error', error);
  //   } else {
  //     console.log('success', JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  //   }
  // });

  client.close();
});
