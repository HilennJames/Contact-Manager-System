import express from 'express';
import bodyParser from 'body-parser';
import {createRequire} from 'module';
const require = createRequire(import.meta.url);
const path = require('path');

export function createExpressApp(database){
  const app = express();
  app.use(express.static(path.join(__dirname,'public')));
  app.use('/profiles', express.static(path.join(__dirname,'profiles')));
  app.use(bodyParser.json());
  app.use('/api', apiRouter(database));
}

