import { Template } from 'meteor/templating';
import { PublicProfileDB } from '../api/mongo.js';

import './dashboard.html';

Template.dashboard.events({
  'click .logout': function(event) {
    // Prevent default browser form submit
    event.preventDefault();

    Meteor.logout();
    console.log("User has logged off");
    Router.go('/');
  },
  'submit': function(event) {
    // Prevent default browser form submit
    event.preventDefault();

    var firstName = document.getElementById('firstName').value,
    middleName = document.getElementById('middleName').value,
    lastName = document.getElementById('lastName').value,
    nickName = document.getElementById('nickName').value,
    phoneNumber1 = document.getElementById('phoneNumber1').value,
    phoneNumber2 = document.getElementById('phoneNumber2').value,
    address1 = document.getElementById('address1').value,
    address2 = document.getElementById('address2').value,
    zipCode =  document.getElementById('zipCode').value,
    cityState = document.getElementById('cityState').value,
    bloodType = document.getElementById('bloodType').value,
    nickName = document.getElementById('nickName').value,
    weight = document.getElementById('weight').value,
    dob = document.getElementById('dob').value;

    // PublicProfileDB.insert({
    //   name: firstName,
    // });
  },
});

// var fetch = PublicProfileDB.find().fetch();
// console.log(fetch);
