import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../imports/ui/login.js';
import '../imports/ui/home.js';
import '../imports/ui/register.js';
import '../imports/ui/dashboard.js';


// Template.hello.onCreated();
//
// Template.hello.helpers({,});

if(Meteor.isClient){
  // client code goes here
}

if(Meteor.isServer){
  // server code goes here

//   Meteor.publish(null, function (){
//   return Meteor.roles.find({})
// })

}

// Routes
Router.route('/', {
  template: 'login',
});

Router.route('/register', {
  template: 'register',
});

Router.route('/registerPro', {
  template: 'registerPro',
});

Router.route('/dashboard', {
  template: 'dashboard',
});

Router.route(':userId', {
  template: 'home',
});
