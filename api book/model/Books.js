const mongoose = require('mongoose')
const timestamps = require("mongoose-timestamps");
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    bookName: { type: String, required: true },
    authorName: { type: String, required: true },
    desryption: { type: String, required: true },
    price: { type: String, required: true },
    language: { type: String, required: true },
    publisher: { type: String, required: true },
    bookImage:{type:String},
    createdAt: Date,
    updatedAt: Date,
})
BookSchema.plugin(timestamps, { index: true });
module.exports = mongoose.model('Book', BookSchema)