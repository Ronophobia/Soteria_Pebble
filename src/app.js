/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');

var main = new UI.Window({
    fullscreen: true,
  });

  var textfield1 = new UI.Text({
    position: new Vector2(0, 20),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Soteria',
    textAlign: 'center'
  });
var textfield2 = new UI.Text({
    position: new Vector2(0, 60),
    size: new Vector2(144, 30),
    font: 'gothic-14',
    text: 'Start',
    textAlign: 'center'
  });
var textfield3 = new UI.Text({
    position: new Vector2(0, 90),
    size: new Vector2(144, 30),
    font: 'gothic-14',
    text: 'Stop',
    textAlign: 'center'
  });
var textfield4 = new UI.Text({
    position: new Vector2(0, 120),
    size: new Vector2(144, 30),
    font: 'gothic-14',
    text: 'Alert',
    textAlign: 'center'
  });
  main.add(textfield1);
  main.add(textfield2);
  main.add(textfield3);
  main.add(textfield4);

main.show();

main.on('click', 'up', function(e) {
  
  var sun = new UI.Window({
    fullscreen: true,
  });
  
  var textfield = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 30),
    font: 'gothic-14-bold',
    text: 'Your safety is being ensured.',
    textAlign: 'center'
  });
  sun.add(textfield);
  sun.show();
  setInterval(function () {
  navigator.geolocation.getCurrentPosition(
  function(pos) {
  var volUp = {
              "deviceId" : "123456789", 
              "coords":{
                   "latitude" : pos.coords.latitude,
                   "longitude": pos.coords.longitude                   
              },
              "userInfo": {
                      "userType": "Student",
                      "name": "Rono Dasgupta",
                      "contact": "+1-443-985-5444",
                      "emergency": "+1-980-777-0434",
                      "age": 23,
                      "gender":"M"
                       },
               "destination": {
                   "coords":{
                              "latitude" : "39.3373699",
                              "longitude": "-76.6266319"
                          },
                              "type": "home"
                          },
              "timestamp": new Date().toISOString() ,
              "emergency": false,
              "enroute": true
          };
  ajax(
        {
          url: 'http://52.72.190.94:5000/userLocation',
          method: 'post',
          type: 'json',
          data: volUp,
          crossDomain: true
        });});            
              }, 5000);
  
});

main.on('click', 'select', function(e) {
  var wind = new UI.Window({
    fullscreen: true,
  });
  var textfield = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 30),
    font: 'gothic-14-bold',
    text: 'Tracking stopped.',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
  navigator.geolocation.getCurrentPosition(
  function(pos) {
  var volMid = {
              "deviceId" : "123456789", 
              "coords":{
                    "latitude" : pos.coords.latitude,
                   "longitude": pos.coords.longitude                   
              },
              "userInfo": {
                      "userType": "Student",
                      "name": "Rono Dasgupta",
                      "contact": "+1-443-985-5444",
                      "emergency": "+1-980-777-0434",
                      "age": 23,
                      "gender":"M"
                       },
               "destination": {
                   "coords":{
                              "latitude" : "39.3373699",
                              "longitude": "-76.6266319"
                          },
                              "type": "home"
                          },
              "timestamp": new Date().toISOString() ,
              "emergency": false,
              "enroute": false
          };
  ajax(
        {
          url: 'http://52.72.190.94:5000/userLocation',
          method: 'post',
          type: 'json',
          data: volMid,
          crossDomain: true
        });});
});

main.on('click', 'down', function(e) {
 var yolo = new UI.Window({
    fullscreen: true,
  });
  var textfield = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 30),
    font: 'gothic-14-bold',
    text: 'Stay Calm.\nSecurity is on the way.',
    textAlign: 'center'
  });
  yolo.add(textfield);
  yolo.show();
  navigator.geolocation.getCurrentPosition(
  function(pos) {
  var volDown = {
              "deviceId" : "123456789", 
              "coords":{
                    "latitude" : pos.coords.latitude,
                   "longitude": pos.coords.longitude                 
              },
              "userInfo": {
                      "userType": "Student",
                      "name": "Rono Dasgupta",
                      "contact": "+1-443-985-5444",
                      "emergency": "+1-980-777-0434",
                      "age": 23,
                      "gender":"M"
                       },
               "destination": {
                   "coords":{
                              "latitude" : "39.3373699",
                              "longitude": "-76.6266319"
                          },
                              "type": "home"
                          },
              "timestamp": new Date().toISOString() ,
              "emergency": true,
              "enroute": true
          };
  ajax(
        {
          url: 'http://52.72.190.94:5000/userLocation',
          method: 'post',
          type: 'json',
          data: volDown,
          crossDomain: true
        });});
});