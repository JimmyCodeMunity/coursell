const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Course = require('../model/CourseModel');

const createCourse = async(req,res)=>{
    const {coursename,courselink,displayimage} = req.body;
    try {
        const existingcourse = await Course.findOne({coursename});

        if(existingcourse){
            return res.status(400).json({message:'Course already exists'})
        }else{
            const hashedPassword = await bcrypt.hash(password,10);
            const newCourse = new User({coursename,courselink,displayimage});
            await newCourse.save();
            res.status(201).json({message:'Couse created successfully'})
            console.log(newCourse)
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error creating course'})
        
    }
}


//GET ALL COURSES
const getAllCourses = async(req,res) =>{
    try {
        const courses = await Course.find();
        res.status(200).json(courses)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error getting courses'})
    }
}

module.exports = {createCourse,getAllCourses};
