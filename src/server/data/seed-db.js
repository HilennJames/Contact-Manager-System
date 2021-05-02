import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
/************************/
const users = require('./users.json');
const contacts = require('./contacts.json');
/***************************/
const bcrypt = require('bcrypt');



function seedCollection(collectionName, dbName, initialRecords){

  MongoClient.connect(process.env.DB_CONN,{ useUnifiedTopology: true },(err, db)=>{
    console.log('connected to mongodb..');
    const collection = db.db(dbName);
    collection.collection(collectionName).drop(function(err , delOK){if (err) throw err;});

    //hash passwords if any
    initialRecords.forEach((item)=>{
      if(item.password){
        //use bcrypt ot hash password
        item.password = bcrypt.hashSync(item.password,10)
      }
    });

    //insert seed records into collection
    collection.collection(collectionName).insertMany(initialRecords, (err, result)=>{
      if (err) throw err;
      console.log(`${result.insertedCount} records inserted.`);
      console.log('closing connection...');
      db.close();
      console.log('done');
    });

  })
}

seedCollection('users','contactManager', users);
seedCollection('contacts','contactManager',contacts);

