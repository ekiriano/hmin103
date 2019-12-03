
const mongoose = require("mongoose");
const User = require("../models/User");

//require dev Dependencies

const server = require("../server");
const user = require("../routes/api/users");



// Parent Testing Block
describe("User", () => {
  beforeEach(done => {
    // Before each tests clear the Database
    User.remove({}, err => {
      done();
    });
  });

  
   * @test
   * /POST api/users/register
   

  /////////////////////////////// THE CONST USER=.... IS JUST TEMPORARY FOR TESTING PURPOSES
  
  
import { validateRegisterInput } from '/validation/register';
       const user = {
       name: "johnDoe",
       email: "johnDoe@test.com",
       password: "secret",
       password2: "secret"
     };
 describe{'validateRegisterInput',() => {
   it('should output true',() => {
     expect(validateRegisterInput(user).isValid).toBe('true');
   });
 });
          
          
 const User = {
   name: "johnDoe",
   email: "johnDoe@test.com",
   password: "secret",
 };
 describe('an_existing_user_can_login', () => {
  it('should say if a user exists in the database', () => {
    return user(User)
    .then(data => {
      expect(data.statusCode).toBe(200);
    })
  })
});
          
 const User = {
   name: "johnDoe",
   email: "johnDoe@test.com",
   password: "secret",
   user_type: "regular"
 };
   describe('a_regular_user_cannot_post_to_superuser_dashboard', () => {
  it('should say true', () => {
      expect(User.user_type).toEqual('super'); /////// you have this to add to the user scheme my nigga
      expect(User.user_type).toEqual('admin');/////// this aswell

    })
  })
});    
  
   const User = {
   name: "johnDoe",
   email: "johnDoe@test.com",
   password: "secret",
   user_type: "regular"
 };
   describe('a_regular_user_cannot_post_to_admin_dashboard', () => {
  it('should say true', () => {
      expect(User.user_type).toEqual('admin');

    })
  })
});

   const User = {
   name: "johnDoe",
   email: "johnDoe@test.com",
   password: "secret",
   user_type: "regular"
 };
   describe('a_super_user_can_post_to_superuser_dashboard', () => {
  it('should say true', () => {
      expect(User.user_type).toEqual('super');

    })
  })
});

   const User = {
   name: "johnDoe",
   email: "johnDoe@test.com",
   password: "secret",
   user_type: "regular"
 };
   describe('a_super_user_cannot_post_to_admin_dashboard', () => {
  it('should say true', () => {
      expect(User.user_type).toEqual('admin');

    })
  })
});
          
  
          
          
  

/* 
Tests to write  :
  a_user_with_valid_form_data_can_register() ==> status 200 #DONE
  an_existing_user_can_login() ==> assert sucess trur  + status 200 #DONE
  all_users_can_post_to_basic_form() ==> status 200
  a_regular_user_cannot_post_to_superuser_dashboard() ==> status 401
  a_regular_user_cannot_post_to_admin_dashboard() ==> status 401
  a_super_user_can_post_to_superuser_dashboard() ==> status 200
  a_super_user_cannot_post_to_admin_dashboard() ==> status 401
  ##############################################
  an_authenticated_user_can_access_his_saved_properties
*/
