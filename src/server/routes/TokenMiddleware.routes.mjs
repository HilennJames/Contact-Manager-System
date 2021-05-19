import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const checkJwt = require('express-jwt');

export const tokenAuthRoutes = (server) => {

  server.use( checkJwt({secret: process.env.JWT_SECRET , algorithms: ['RS256'] }).unless({path: '/api/authenticate '}));

  server.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(402).send({error: err.message});
    }
  })

}

