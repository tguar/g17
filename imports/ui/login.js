import { Template } from 'meteor/templating';

import './login.html';

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
