const express = require('express');
const { getAllCourses, createCourse } = require('../controller/CourseController');

const router = express.Router();
router.use(express.json());

router.use(express.urlencoded({ extended:false}));


router.get('/allcourses',getAllCourses)

router.post('/addcourse',createCourse)


module.exports = router;