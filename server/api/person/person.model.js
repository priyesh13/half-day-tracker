'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PersonSchema = new Schema({
  name: String,
  initials: String,
  supportHalfDays: Number,
  bonusHalfDays: Number
});

module.exports = mongoose.model('Person', PersonSchema);