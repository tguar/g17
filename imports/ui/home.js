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
  },
  professionalCheck: function () {
    var user = Meteor.userId();
    var checkObject = PublicProfileDB.findOne({profileId: user});
    var viewing = window.location.pathname;
    viewing = viewing.replace('/users/', '');
    viewingObject = PublicProfileDB.findOne({email: viewing});
    viewingUser = viewingObject.profileId;
    var pro = false;
    if(checkObject.profileId === viewingObject.profileId) {
      pro = true;
    }
    if (checkObject.professional === true) {
      pro = true;
    }
    return pro;
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

Template.home.events({
  'click button': function(event) {
    // Prevent default browser form submit
    event.preventDefault();
    Router.go(Meteor.absoluteUrl()+ 'dashboard');


  }
});
