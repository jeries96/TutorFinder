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
    description: String,
    subject: String,
    img: Image
  }
})





module.exports = PeopleRating;