import { Template } from 'meteor/templating';
import { PublicProfileDB } from '../api/mongo.js';

import './register.html';

Template.register.events({
  'click button': function(event) {
    // Prevent default browser form submit
    event.preventDefault();

    var email = document.getElementById('registerEmail').value
    var password = document.getElementById('registerPassword').value;
    var password2 = document.getElementById('registerPassword2').value;
    var professional = document.getElementById('professionalCode').value;

    var pro = false;

    if(password !== password2) {
      alert("Your passwords do not match");
    }
    else {
      if(professional === "helal") {
        pro = true;
      }
      Accounts.createUser({
        email: email,
        password: password,
        professional: pro,
      }, function(error) {
        if(error) {
          alert(error.reason);
        }
        else {
          console.log("Account successfully created");
          var userId = Meteor.userId();
          PublicProfileDB.insert({
            profileId: userId,
            email: email,
            professional: pro
          });
          Router.go(Meteor.absoluteUrl()+ 'dashboard');
        }
      });
    }
  },
});
