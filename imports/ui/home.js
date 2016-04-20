import { Template } from 'meteor/templating';
import { PublicProfileDB } from '../api/mongo.js';

import './home.html';




  Template.home.helpers({
    userObject: function () {
      var user = Meteor.userId();
      if(!Meteor.userId()){
        if (Roles.userIsInRole(userId, ['view-secrets','admin', 'super-admin'], group)) {
          return PublicProfileDB.findOne({profileId: user});
        }
        else {

            //Unathurized access
            this.stop();
            return;

        }
      }
      else {
        return PublicProfileDB.findOne({profileId: user});
      }
    }
  });


Template.home.events({
  'click .logout': function(event) {
    // Prevent default browser form submit
    event.preventDefault();

    Meteor.logout();
    console.log("User has logged off");
    Router.go('/');
  },
  'click button': function(event) {
    event.preventDefault();

    Router.go('/dashboard');
  }
});

// document.addEventListener("DOMContentLoaded", function(event) {
//     console.log("DOM fully loaded and parsed");
//     document.getElementById('a').innerHTML = "Hello";
//   });
