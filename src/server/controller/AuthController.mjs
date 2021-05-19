import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


export const AuthenticateUser = (req, res) =>{
  let data ;
  MongoClient.connect(process.env.DB_CONN, { useUnifiedTopology: true ,  useNewUrlParser: true },
    (err, db)=> {
      console.log('connected to mongodb database inside...');
      //code below assign DB connection to variable
      data = db.db('contactManager').collection('users');
      const user = req.body;
      console.log(user)
      data.findOne({where: {username: user.username}}, (err, result) => {
        if (!result) {
          return res.json({error: 'user not found'})
        }
        if (!bcrypt.compareSync(user.password), result.password) {
          return res.json({error: 'incorrect password'})
        }
        const payload = {
          username: result.username,
          admin: result.admin
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '2h'});

        return res.json({
          message: 'successfully authenticated',
          token: token
        });
      })
    });
}

