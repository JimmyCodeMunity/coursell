const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/UserModel');
const bcrypt = require('bcryptjs');

const createUser = async(req,res)=>{
    const {username,email,password} = req.body;
    try {
        const existinguser = await User.findOne({email});

        if(existinguser){
            return res.status(400).json({message:'User already exists'})
        }else{
            const hashedPassword = await bcrypt.hash(password,10);
            const newUser = new User({username,email,password:hashedPassword});
            await newUser.save();
            res.status(201).json({message:'User created successfully'})
            console.log(newUser)
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json('message','Error creating user')
        
    }
}


const Login = async(req,res) =>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json('message','User not found')
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({message:'Invalid password'})
        }

        res.json('message','User logged in successfully')
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error logging in'})
        
    }
}

//get all users
const getAllUsers = async(req,res) =>{
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error getting users'})
    }
}

module.exports = {createUser, Login,getAllUsers};