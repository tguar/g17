import { Template } from 'meteor/templating';
import { PublicProfileDB } from '../api/mongo.js';

import './registerPro.html';

Template.register.events({
  'click button': function(event) {
    // Prevent default browser form submit
    event.preventDefault();

    var email = document.getElementById('registerEmail').value
    var password = document.getElementById('registerPassword').value;
    var password2 = document.getElementById('registerPassword2').value;

    if(password !== password2) {
      alert("Your passwords do not match");
    }
    else {
      Accounts.createUser({
        email: email,
        password: password,
      }, function(error) {
        if(error) {
          console.log(error.reason);
        }
        else {
          console.log("Account successfully created");
          var userId = Meteor.userId();
          PublicProfileDB.insert({
            profileId: userId,
            email: email
          });

          // var users = [
          //   {name:"Normal User",email:"normal@example.com",roles:[]},
          //   {name:"Admin User",email:"admin@example.com",roles:['admin']}
          // ];


          Roles.addUsersToRoles(userId, ['super-admin'], Roles.GLOBAL_GROUP);
          Router.go(Meteor.absoluteUrl() + Meteor.userId());
        }
      });
    }
  },
});
