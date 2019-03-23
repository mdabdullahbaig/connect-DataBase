const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
    if (err) {
        return console.log('Unable to connect MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text:"chutiya"}).then(function(result) {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({completed: false}).then(function(result) {
    //     console.log(result);
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: "Monal is Haddi"}).then(function(result) {
    //     console.log(result)
    // })

    db.collection('Todos').findOneAndDelete({_id: new ObjectID('5c96336a03015f01457ffc59')}).then(function(result) {
        console.log(result)
    })

    db.close();
});