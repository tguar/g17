import { Template } from 'meteor/templating';

import './loginHome.html';

Template.loginHome.events({
  'click button'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    var email = document.getElementById('inputEmail1').value
    var password = document.getElementById('inputPassword1').value
    var str = window.location.pathname;

    Meteor.loginWithPassword(email, password, function(error) {
      if(error) {
        alert(error.reason);
      }
      else {
        console.log("User has logged in");
        // $(document).ready(function(){
        //     //Check if the current URL contains '#'
        //     if(document.URL.indexOf("#")==-1){
        //         // Set the URL to whatever it was plus "#".
        //         url = document.URL+"#";
        //         location = "#";
        //
        //         //Reload the page
        //         location.reload(true);
        //     }
        // });
        Router.go(str)
      }
    });
  },
});
