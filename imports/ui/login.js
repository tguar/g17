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
        Router.go(Meteor.absoluteUrl()+ 'users/' + email);
      }
    });
  },
});







// Template.item.helpers({
//     profileUrl: function() {
//         var user = Meteor.users.findOne(this.userId, {reactive:false});
//         if(user)
//             return getProfileUrlById(user);
//     }
//  });
//
// getProfileUrlById = function(id) {
//     return Meteor.absoluteUrl()+'users/' + id;
// }
