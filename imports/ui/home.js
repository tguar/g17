import { Template } from 'meteor/templating';
import { PublicProfileDB } from '../api/mongo.js';

import './home.html';

// Template.home.helpers({
//   formData:function(){
//     var id = Meteor.userId();
//     var db = PublicProfileDB.findOne({profileId: id});
//     console.log(db);
//     return PublicProfileDB.findOne({profileId: id});
//   }
// })

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
