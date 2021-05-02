import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const MongoClient = require('mongodb').MongoClient;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

let database;

//Db connection
MongoClient.connect(process.env.DB_CONN, { useUnifiedTopology: true ,  useNewUrlParser: true },
  (err, db)=>{
    if (err) console.log(err);
    console.log('connected to mongodb...');
    //code below assign DB connection to variable
    database = db.db("contactManager")
  });

export const AuthenticateUser = (req, res) =>{
         const user = req.body;
         const usersCollection = database.collection('users')
   usersCollection
     .findOne({username : user.username}, (err, result) => {
        if (!result){
          return res.status(404).json({ error: 'user not found'})
        };
        if ( !bcrypt.compareSync(user.password), result.password){
        return res.status(401).json({error: 'incorrect password'})
        };
        const payload = {
          username : result.username ,
          admin: result.admin
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET,{expiresIn: '2h'});
        return  res.json({
          message : 'successfully authenticated',
          token : token
        });
     })
}

