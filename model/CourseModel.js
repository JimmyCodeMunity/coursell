const mongoose =  require('mongoose');
const express = require('express');

const courseSchema = new mongoose.Schema({
    coursename:{
        type: String
    },
    courselink:{
        type:String
    },
    displayimage:{
        type: String
    },
    description:{
        type: String
    }
});


const Course = mongoose.model('Course', courseSchema);

module.exports = Course;