/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Person = require('../api/person/person.model');

Person.find({}).remove(function() {
  Person.create({
    name : 'Ben',
    initials: 'BM',
    supportHalfDays: 10,
    bonusHalfDays: 0
  },{
    name : 'Priyesh',
    initials: 'PM',
    supportHalfDays: 5,
    bonusHalfDays: 2
  },{
    name : 'Deniz',
    initials: 'DK',
    supportHalfDays: 0,
    bonusHalfDays: 0
  },{
    name : 'Dave',
    initials: 'DN',
    supportHalfDays: 2,
    bonusHalfDays: 1
  })
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});