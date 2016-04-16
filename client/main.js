import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// Template.hello.onCreated();
//
// Template.hello.helpers({,});

Template.login.events({
  'click button'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    var email = document.getElementById('inputEmail').value
    var password = document.getElementById('inputPassword').value

    Meteor.loginWithPassword(email, password, function(error) {
      if(error) {
        console.log(error.reason);
      }
      else {
        Router.go('/dashboard');
      }
    });
  },
});

Template.register.events({
  'click button': function(event) {
    // Prevent default browser form submit
    event.preventDefault();

    var email = document.getElementById('registerEmail').value
    var password = document.getElementById('registerPassword').value;
    var password2 = document.getElementById('registerPassword2').value;

    if(password !== password2) {
      alert("Your passwords do not match");
    }
    else {
      Accounts.createUser({
        email: email,
        password: password,
      }, function(error) {
        if(error) {
          console.log(error.reason);
        }
        else {
          console.log("Account successfully created");
          Router.go('/dashboard');
        }
      });
    }
  },
});

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
    phoneNumber = document.getElementById('phoneNumber').value,
    address = document.getElementById('address').value,
    zipCode =  document.getElementById('zipCode').value,
    cityState = document.getElementById('cityState').value;


  },
});

if(Meteor.isClient){
  // client code goes here
}

if(Meteor.isServer){
  // server code goes here
}

// Routes
Router.route('/', {
  template: 'login',
});

Router.route('/register', {
  template: 'register',
});

Router.route('/dashboard', {
  template: 'dashboard',
});
