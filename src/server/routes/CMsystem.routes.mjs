import {
  getAllContacts,
  addNewContact,
  getContactWithID,
  deleteContactWithID,
  updateContact
}from '../controller/CM.controller.mjs';


export const routes = (server) => {
  //All contacts
    server.route('/api/contacts')
      .get(( req, res, next)=> {
        console.log('The route is working'),
      next()
      },getAllContacts)

  //Single contact
   server.route('/api/contact')
      .post((req,res,next) =>{console.log(req.body),next()},addNewContact)

  //Single ID
  server.route('/api/contact/:contactID')

      .get(getContactWithID)

      //PUT
      .put(updateContact)

      //DELETE
      .delete((res,req , next)=>{
        console.log(req.body.params)
        next()
      }, deleteContactWithID)


  /*************** User Routes *********************/
    server.route('/api/user')
    //GET
    //POST
    server.route('/api/user/:userID')
    //GET SPECIFIC ID
    //PUT UPDATE
    //DELETE

}

