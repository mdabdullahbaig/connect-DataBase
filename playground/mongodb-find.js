const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
    if (err) {
        return console.log('Unable to connect MongoDB Server');
    }
    console.log('Connected to MongoDB server');


   db.collection('Todos').find({completed: true}).toArray().then(function(docs) {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
   }, function(err) {
    console.log('Unable to fetch todos', err);
   });


   db.collection('Todos').find({_id: new ObjectID('5c96333f03015f01457ffc53')}).toArray().then(function(docs) {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
   }, function(err) {
    console.log('Unable to fetch todos', err);
   });
    db.close();
});