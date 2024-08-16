const express = require('express');
const { getAllCourses, createCourse, getCourseById, deleteCourse } = require('../controller/CourseController');

const router = express.Router();
router.use(express.json());

router.use(express.urlencoded({ extended:false}));


router.get('/allcourses',getAllCourses)
router.get('/allcourses/:id',getCourseById)

router.post('/addcourse',createCourse)
router.delete('/deletecourse/:id',deleteCourse)


module.exports = router;