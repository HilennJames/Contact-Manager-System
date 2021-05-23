import express from 'express';
import { createRequire } from 'module'; // import createRequire for require
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import  { routes } from './routes/CMsystem.routes.mjs';
import  { authRoutes} from './routes/Authentication.routes.mjs'
// import { tokenAuthRoutes } from "./routes/tokenMiddleware.routes.mjs";

const require = createRequire(import.meta.url);
require('dotenv').config();
const path = require('path');
const __dirname = dirname(fileURLToPath(import.meta.url));
const cors = require('cors');

const server = express();
const PORT =  3000;

server.use(express.urlencoded({extended:false}));
server.use(express.json());

routes(server);
authRoutes(server);
//tokenAuthRoutes(server);

server.use(cors());
server.use(express.static('src'));
server.use('/server/profiles',express.static('src'));
server.use(express.static(path.join(__dirname,'profiles')));
server.use(function (req, res, next)
{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials','true');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
  next();
});

 //initial routes
server.get('/api',(req, res)=>{
  res.send('server connected')
})

//lets angular handle client side routing
// server.get('*', (req, res)=> {
//   return res.sendFile(__dirname)
// });

server.listen(PORT, ()=>{
  ;
  console.log(`listening on port ${PORT}`)
})


