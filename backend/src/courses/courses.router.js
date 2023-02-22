const router = require('express').Router()
const courseServices = require('./courses.services')


router.route('/')
    .get(courseServices.getAllCourses)

router.get('/course', courseServices.getCourseByName)

router.route('/:id')
    .get(courseServices.getCourseById)

router.route('/my-courses')
    .post(courseServices.postCourse)

router.route('/my-courses/:id') 
    .patch(courseServices.patchCourse)
    .put(courseServices.putCourse)
    .delete(courseServices.deleteCourse)

module.exports = router