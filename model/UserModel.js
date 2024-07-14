const mongoose =  require('mongoose');
const express = require('express');

const userSchema = new mongoose.Schema({
    username:{
        type: String
    },
    email:{
        type:String
    },
    password:{
        type: String
    }
});


const User = mongoose.model('User', userSchema);

module.exports = User;