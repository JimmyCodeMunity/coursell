const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Course = require('../model/CourseModel');

const createCourse = async(req,res)=>{
    const {coursename,courselink,displayimage,description} = req.body;
    try {
        const existingcourse = await Course.findOne({coursename});

        if(existingcourse){
            return res.status(400).json({message:'Course already exists'})
        }else{
            const newCourse = new Course({coursename,courselink,displayimage,description});
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

const getCourseById = async (req, res) => {
    try {
      // Get the ID from the request parameters
      const { id } = req.params;
  
      // Find the user by ID
      const course = await Course.findById(id);
  
      // If the user is not found, return a 404 response
      if (!course) {
        return res.status(404).json({ message: 'User not found with the provided ID' });
      }
  
      // If the user is found, return the user data
      res.status(200).json(course);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };

module.exports = {createCourse,getAllCourses,getCourseById};
