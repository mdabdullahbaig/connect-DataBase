const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
    if (err) {
        return console.log('Unable to connect MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c954b3142ae7c14e0d255b3')
    }, {
        $set: {
            name: 'Rahul'
        },
        $inc: {
            age:2
        }
    }, {
        returnOriginal: false
    }).then(function(result) {
        console.log(result);
    })

    db.close();
});