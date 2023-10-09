const mongoose = require('mongoose');

const FieldSchema = new mongoose.Schema({
    
    title : String,
    addresses : String,
    photos : [String],
    description : String,
    perks : [String],
    extraInfo : String,
    openingTime : Number,
    closingTime : Number,
    bookings : Number,
});

const FieldModel = mongoose.model('Field',FieldSchema);
module.exports = FieldModel;