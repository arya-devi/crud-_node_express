const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{
        type: 'string',
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model("todo",todoSchema)