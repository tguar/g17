import { Template } from 'meteor/templating';
import { PublicProfileDB } from '../api/mongo.js';

import './home.html';


// var userId = Meteor.userId();
//
// if (Roles.userIsInRole(userId, ['view-secrets','admin', 'super-admin'], group)) {

  Template.home.helpers({
    userObject: function () {
      var user = Meteor.userId();
      return PublicProfileDB.findOne({profileId: user});
    }
  });

// } else {
//
//     //Unathurized access
//     this.stop();
//     return;
//
//   }


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
