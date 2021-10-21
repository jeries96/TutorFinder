const mongoose = require('mongoose');
const UserSchema = require('./UserSchema');

const PeopleRating = new mongoose.Schema({
  rateParticipants: {
    writer: UserSchema,
    receiver: UserSchema
  },
  ratingInfo: {
    creationDate: Date,
    rate: Number,
    subject: String,
  }
})





module.exports = PeopleRating;