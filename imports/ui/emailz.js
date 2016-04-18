import { Template } from 'meteor/templating';

import './emailz.html';

Template.emailz.events({
  'click button'(event) {
    // Prevent default browser form submit
    event.preventDefault();

        Router.go('/dashboard');
  },
});


// Template.profile.helpers({
//     //username: function() {return Meteor.user().username},
//     email: function() {return Meteor.user().email}
//  });
