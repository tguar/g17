import { Template } from 'meteor/templating';

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
    lastName = document.getElementById('lastName').value,
    phoneNumber = document.getElementById('phoneNumber1').value,
    address = document.getElementById('address1').value,
    zipCode =  document.getElementById('zipCode').value,
    cityState = document.getElementById('cityState').value;
  },
});
