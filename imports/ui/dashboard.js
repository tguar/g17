import { Template } from 'meteor/templating';
import { PublicProfileDB } from '../api/mongo.js';

import './dashboard.html';

Template.dashboard.helpers({
  formData:function(){
    var id = Meteor.userId();
    var db = PublicProfileDB.findOne({profileId: id});
    console.log(db);
    return PublicProfileDB.findOne({profileId: id});
  }
})

Template.dashboard.events({
  'click .logout': function(event) {
    // Prevent default browser form submit
    event.preventDefault();

    Meteor.logout();
    console.log("User has logged off");
    Router.go('/');
  },
  'click .login': function(event) {
    // Prevent default browser form submit
    event.preventDefault();

    console.log("Back to login page");
    Router.go('/');
  },
  'click .cancel': function(event) {
    // Prevent default browser form submit
    event.preventDefault();

    console.log("Back to home page");
    Router.go('/users/:email');
  },
  'submit': function(event) {
    // Prevent default browser form submit
    event.preventDefault();

    var firstName = document.getElementById('yourFirstName').value,
    middleName = document.getElementById('yourMiddleName').value,
    lastName = document.getElementById('yourLastName').value,
    nickName = document.getElementById('yourNickName').value,
    phoneNumber1 = document.getElementById('emergencyPhoneNumber1').value,
    phoneNumber2 = document.getElementById('emergencyPhoneNumber2').value,
    address1 = document.getElementById('yourAddressLine1').value,
    address2 = document.getElementById('yourAddressLine2').value,
    zipCode =  document.getElementById('yourZipCode').value,
    city = document.getElementById('yourAddressCity').value,
    state = document.getElementById('yourAddressState').value,
    height = document.getElementById('height').value,
    bloodType = document.getElementById('bloodType').value,
    weight = document.getElementById('weight').value,
    dob = document.getElementById('dob').value,
    allergy1 = document.getElementById('latex').checked,
    allergy2 = document.getElementById('nuts').checked,
    allergy3 = document.getElementById('milk').checked,
    allergy4 = document.getElementById('egg').checked,
    allergy5 = document.getElementById('otherAllergies').value,
    condition1 = document.getElementById('asthma').checked,
    condition2 = document.getElementById('diabetes').checked,
    condition3 = document.getElementById('epilepsy').checked,
    condition4 = document.getElementById('heartConditions').checked,
    condition5 = document.getElementById('otherConditionsText').value,
    emergencyFirstName1 = document.getElementById('emergencyFirstName1').value,
    emergencyLastName1 = document.getElementById('emergencyLastName1').value,
    emergencyPhoneNumber1 = document.getElementById('emergencyPhoneNumber1').value,
    emergencyRelation1 = document.getElementById('emergencyRelation1').value,
    emergencyFirstName2 = document.getElementById('emergencyFirstName2').value,
    emergencyLastName2 = document.getElementById('emergencyLastName2').value,
    emergencyPhoneNumber2 = document.getElementById('emergencyPhoneNumber2').value,
    emergencyRelation2 = document.getElementById('emergencyRelation2').value;


    var userId = Meteor.userId();
    var db = PublicProfileDB.findOne({profileId: userId});
    // PublicProfileDB.find( {profileId: userId} );
    // console.log(db._id);
    PublicProfileDB.update(
      { _id: db._id }, {
        $set: {
          profileId: userId,
          name: {
            first: firstName,
            middle: middleName,
            last: lastName,
            nickname: nickName
          },
          phoneNumber: {
            number1: phoneNumber1,
            number2: phoneNumber2
          },
          address: {
            addressLine1: address1,
            addressLine2: address2,
            city: city,
            state: state,
            zipCode: zipCode
          },
          bloodType: bloodType,
          height: height,
          weight: weight,
          dateOfBirth: dob,
          allergies: {
            latex: allergy1,
            nut: allergy2,
            milk: allergy3,
            egg: allergy4,
            otherAllergies: allergy5
          },
          otherConditions: {
            asthma: condition1,
            diabetes: condition2,
            epilepsy: condition3,
            heartConditions: condition4,
            otherConditions: condition5
          },
          emergencyContact1: {
            first: emergencyFirstName1,
            last: emergencyLastName1,
            number: emergencyPhoneNumber1,
            relation: emergencyRelation1
          },
          emergencyContact2: {
            first: emergencyFirstName2,
            last: emergencyLastName2,
            number: emergencyPhoneNumber2,
            relation: emergencyRelation2
          }
        }
      },
      { upsert: true}
    );
    alert("Your profile has been updated");
    var email = Meteor.user().emails[0].address;
    Router.go(Meteor.absoluteUrl()+ 'users/' + email);
  }
});

Template.dashboard.onRendered(function () {
  // Use the Packery jQuery plugin
  var userId = Meteor.userId();
  var db = PublicProfileDB.findOne({profileId: userId});
  var check;
  check = db.allergies.latex;
  if(check == true) {
    document.getElementById('latex').checked = true;
  }
  check = db.allergies.nut;
  if(check == true) {
    document.getElementById('nuts').checked = true;
  }
  check = db.allergies.milk;
  if(check == true) {
    document.getElementById('milk').checked = true;
  }
  check = db.allergies.egg;
  if(check == true) {
    document.getElementById('egg').checked = true;
  }
  check = db.otherConditions.asthma;
  if(check == true) {
    document.getElementById('asthma').checked = true;
  }
  check = db.otherConditions.diabetes;
  if(check == true) {
    document.getElementById('diabetes').checked = true;
  }
  check = db.otherConditions.epilepsy;
  if(check == true) {
    document.getElementById('epilepsy').checked = true;
  }
  check = db.otherConditions.heartConditions;
  if(check == true) {
    document.getElementById('heartConditions').checked = true;
  }
  check = db.address.state;
  document.getElementById('yourAddressState').value = check;
  check = db.bloodType;
  document.getElementById('bloodType').value = check;

});
