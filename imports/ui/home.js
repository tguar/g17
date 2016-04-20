import { Template } from 'meteor/templating';
import { PublicProfileDB } from '../api/mongo.js';

import './home.html';



Template.home.helpers({
  userObject: function () {
    var str = window.location.pathname;
    str = str.replace('/users/', '');
  //  var user = Meteor.userId();
    return PublicProfileDB.findOne({email: str});
    // var user = Meteor.userId();
    // return PublicProfileDB.findOne({profileId: user});
  },
  checkUser: function () {
    var viewing = window.location.pathname;
    viewing = viewing.replace('/users/', '');
    viewingObject = PublicProfileDB.findOne({email: viewing});
    viewingUser = viewingObject.profileId;
    currentUser = Meteor.userId();
    var check = true;
    if(currentUser != viewingUser) {
      check = false;
    }
    return check;
    // var user = Meteor.userId();
    // return PublicProfileDB.findOne({profileId: user});
  }
  // viewer: function () {
  //   var user = Meteor.userId();
  //   viewerObject = PublicProfileDB.findOne({profileId: user});
  //   return viewerObject.profileId;
  // }
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

Template.home.events({
  'click button': function(event) {
    // Prevent default browser form submit
    event.preventDefault();
    Router.go(Meteor.absoluteUrl()+ 'dashboard');


  }
});
