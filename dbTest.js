const {MongoClient, ObjectID} = require('mongodb');
var dbUrl = 'mongodb://localhost:27017/userdb';

MongoClient.connect(dbUrl,function(err,db){
    if(err){
        console.log('Anable to Connected MongoDB Server..!');
    }
    console.log('Connected to MongoDB Server..!');

    //No of Data in MongoDB count
    // db.collection('user').find().count().then((count)=>{
    //     console.log('No Of Count is :',count);
    // }, (err)=>{
    //         console.log('Error in Find Collection',err);
    // });

    //Fetching Data From Database <MongoDB>
    // db.collection('user').find().toArray().then((docs)=>{            //find({name:"haider"})
    //     console.log("Find Success Full");
    //     console.log(JSON.stringify(docs,undefined, 2));
    // }, (err)=>{
    //         console.log('Error in Find Collection',err);
    // });
    
    //Insert data in MongoDD(Version 2.2.5)
    // db.collection('user').insertOne({
    //     name : 'rahul',
    //     age : 38,
    //     phone : 9099098090
    // },function(err,result){
    //     if(err){
    //         console.log('Anable to Insert in  MongoDB..!');
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());  //_id.getTimestamp() = ObjectId or uska Time show karega
    // });


    // db.close();
   
});