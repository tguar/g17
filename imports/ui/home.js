import { Template } from 'meteor/templating';
import { PublicProfileDB } from '../api/mongo.js';

import './home.html';


// Meteor.Router.add(':userId', function() {
//   return this.params.userId;
// });

// http://localhost:3000/WWgY8MkQubXYHQED5 -- groove pass
// http://localhost:3000/Q2dtg9sfCvg3HXZAX -- groovy pass


// http://localhost:3000/JZsCgNFdkrh7YdyyW -- das@a.com da
// http://localhost:3000/7k3J6vZyWXAakZwxL -- ca@c.com ca


// http://localhost:3000/yfjJRemdLyLAn9NAH -- fun@f.com fa pro
// http://localhost:3000/zSYsGJCtwFRgNQw3i -- notfun@f.com fa



// var professional = Meteor.user().pro[0].pro;




  Template.home.helpers({
    userObject: function () {
      var user = Meteor.userId();
      var otherUser = Router.current().params.userId;
      // var professional = Meteor.users.pro;
      if(Router.current().params.userId === Meteor.userId()){
        return PublicProfileDB.findOne({profileId: user});
      }
      else {

        if (Meteor.user().pro[0].pro === "true") {
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
