const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://saurabh:saurabh@cluster0.en0mzco.mongodb.net/blaster?retryWrites=true&w=majority")

module.exports={
    connection
}