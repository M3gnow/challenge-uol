const mongoose = require('mongoose');
const { Schema } = mongoose;
const moment = require('moment-timezone');

const ClientSchema = new Schema({
    name: String,
    sex: String,
    birthDate: Date,
    age: Number,
    city: {
        name : String,
        state : String
    },
    created_at : Date,
    updated_at : Date
});

ClientSchema.index({ name: 1 });

module.exports = mongoose.model('Client', ClientSchema);