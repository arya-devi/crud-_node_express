const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect =await mongoose.connect("mongodb+srv://arya:arya123@cluster0.rvj2aq1.mongodb.net/?retryWrites=true&w=majority")
        console.log("connected to db");
    } catch (err) {
        console.log("db error",err);
        process.exit(1)
    }
}
module.exports = connectDB