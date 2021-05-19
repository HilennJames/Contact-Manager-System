
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();


let dataBase ;

MongoClient.connect(process.env.DB_CONN, { useUnifiedTopology: true ,  useNewUrlParser: true },
  (err, db)=>{
    if (err) console.log(err);
    console.log('connected to mongodb database...');
    //code below assign DB connection to variable
    dataBase = db.db('contactManager');
  });


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
export const addNewContact = ( req, res)=>{
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
  dataBase.collection('contact').findOneAndUpdate({_id: req.params._id},
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
export const deleteContactWithID = ( req, res)=>{
  const findContactID = req.params._id;
  dataBase.collection('contacts').deleteOne(findContactID),
    (err) => {
      if (err) {
        res.send(err);
      }
      // send a message that is was successful
      res.json({message : 'successfully deleted contact'});
    }
  };





