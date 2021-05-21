const mongoose = require('mongoose');
const { Schema } = mongoose;
const moment = require('moment-timezone');
const dateDefault = moment().tz(process.env.TIMEZONE)

const ClientSchema = new Schema({
    name: String,
    sex: String,
    birthDate: {
        type: Date,
        default: dateDefault
    },
    age: Number,
    city: {
        name : String,
        state : String
    }
});

module.exports = mongoose.model('City', ClientSchema);