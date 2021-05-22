const mongoose = require('mongoose');
const { Schema } = mongoose;

const CitySchema = new Schema({
    name : String,
    state : String
});

CitySchema.index({ name: 1, state: 1},{ unique: true });
module.exports = mongoose.model('City', CitySchema);