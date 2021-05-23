import {
  getAllContacts,
  addNewContact,
  getContactWithID,
  deleteContactWithID,
  updateContact
}from '../controller/CM.controller.mjs';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const multer = require('multer');
const upload = multer({ dest: './profiles' })

export const routes = (server) => {
  //All contacts
    server.route('/api/contacts')
      .get(( req, res, next)=> {
        console.log('The route is working'),
      next()
      },getAllContacts)

  //Single contact
   server.route('/api/contact')
      .post(upload.single('photoUrl'),function(req,res,next){
      console.log(req.body.photoUrl['photoUrl'])
          console.log(req)
            , next() }
      ,addNewContact)

  //Single ID
  server.route('/api/contact/:contactID')

      .get(getContactWithID)

      //PUT
      .put(updateContact)

      //DELETE
      .delete(deleteContactWithID)


  /*************** User Routes *********************/
    server.route('/api/user')
    //GET
    //POST
    server.route('/api/user/:userID')
    //GET SPECIFIC ID
    //PUT UPDATE
    //DELETE

}

