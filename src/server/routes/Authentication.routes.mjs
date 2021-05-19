import { AuthenticateUser  }from '../controller/AuthController.mjs';

export const authRoutes = (server) => {

  server.route('/api/authenticate')
    .post(
      (req,res,next, err) =>
      {console.log(req);
        console.log(err),
          next()
      },AuthenticateUser)
}

