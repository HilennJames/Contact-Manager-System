import express from 'express';
import  routes  from './routes/CMsystem.routes.mjs';
import { createRequire } from 'module'; // import createRequire for require


const require = createRequire(import.meta.url);
require('dotenv').config();
import bodyParser from 'body-parser';
const path = require('path');

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const server = express();
const PORT = 3000;

routes(server);
server.use(express.static('dist/public'));
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use('/profiles',express.static('dist/public'));
server.use(express.static(path.join(__dirname,'profiles')));


 //initial routes
server.get('/api',(req, res)=>{
  res.send('server connected')
})

//lets angular handle client side routing
server.get('*', (req, res)=> {
  return res.sendFile(__dirname)
});


server.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`)
})


