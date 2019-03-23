const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
    if (err) {
        return console.log('Unable to connect MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, function(err, result) {
    //     if (err) {
    //         return console.log('Unable to insert', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // });

    db.collection('Users').insertOne({
        name: 'Abdullah',
        stream: 'CSE',
        age: 21
    }, function(err, result) {
        if (err) {
            return console.log('Unable to insert', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));

    });

    db.close();
});