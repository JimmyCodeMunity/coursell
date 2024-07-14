const express = require('express');
const { getAllCourses, createCourse, getCourseById } = require('../controller/CourseController');

const router = express.Router();
router.use(express.json());

router.use(express.urlencoded({ extended:false}));


router.get('/allcourses',getAllCourses)
router.get('/allcourses/:id',getCourseById)

router.post('/addcourse',createCourse)


module.exports = router;