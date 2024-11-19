const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/book-store-B");
        console.log("connected to db")
    } catch (err) {
        console.log(err)
    }
}
module.exports = connect 