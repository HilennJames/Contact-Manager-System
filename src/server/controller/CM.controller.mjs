
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const ObjectId = require('mongodb').ObjectID;
const multer= require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const crypto = require('crypto');
const fs = require('fs')
const methodOverride = require('method-override');

let dataBase ;
let bucket;

//DB
MongoClient.connect(process.env.DB_CONN, { useUnifiedTopology: true ,  useNewUrlParser: true },
  (err, db)=>{
    if (err) console.log(err);
    console.log('connected to mongodb database...');
    //code below assign DB connection to variable
    dataBase = db.db('contactManager');
  });

// file
const storage = multer.diskStorage({
  destination : function (req,file,callback){
    callback(null,'../profiles');
  },
  filename: function(req,res,callback){
  callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({
  storage: storage
})

//1. connect grid fs and mongo
//2. create a write stream to set name of file to what you want
//3. create a read stream usng the video path then
//4. create a pipe and write stream to put file into db


//get All contacts
export const getAllContacts = ( req, res, next)=>{
  dataBase.collection('contacts').find({}).toArray(function (err,docs){
    if (err) {
      console.log(err)
      res.status(500).json({error: 'Error finding records'})
    };
    return res.json(docs);
  })
}

//add Contact
export const addNewContact = (req, res)=>{
  dataBase.collection('contacts').insertOne(req.body, function (err,result){
        if (err) {
        console.log(err)
        return res.status(500).json({error: 'Error inserting new record'})
        };
       return  res.json('contact inserted successfully');
      })
}

//get contact with id
export const getContactWithID = ( req, res)=>{
  console.log(req.params._id)
    const findContactID = req.params._id;
      dataBase.collection('contacts').findOne({findContactID}, function (err,result){
        if (err) {
          console.log(err)
          res.status(500).json({error: 'Error finding record'})
        };
        return res.json(result);
      })
}

//update contact with id
export const updateContact = ( req, res)=> {
  const _id = new ObjectId(req.params["contactID"])
  dataBase.collection('contact').findOneAndUpdate({_id: _id},
    req.body,
    {new: true, useFindAndModify: false},
    (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
}


//delete contact with id
export const deleteContactWithID = (req, res)=>{
  const _id = new ObjectId(req.params["contactID"])
  dataBase.collection('contacts').deleteOne({_id : _id }),
    (err) => {
      if (err) {
        res.send(err);
      }
      // send a message that is was successful
      res.json({message : 'successfully deleted contact'});
    }
  };





