import { Template } from 'meteor/templating';
import { PublicProfileDB } from '../api/mongo.js';

import './home.html';


// Meteor.Router.add(':userId', function() {
//   return this.params.userId;
// });





  Template.home.helpers({
    userObject: function () {
      var user = Meteor.userId();
      var otherUser = Router.current().params.userId;
      if(Router.current().params.userId === Meteor.userId()){
        return PublicProfileDB.findOne({profileId: user});
      }
      else {
        if (Meteor.userId()) {
          return PublicProfileDB.findOne({profileId: otherUser});
        }
        else {

            //Unathurized access
            this.stop();
            return;

        }
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
