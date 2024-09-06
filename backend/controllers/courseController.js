// const Course = require('../models/courseModel');

// // Get all courses
// exports.getCourses = async (req, res) => {
//     try {
//         const courses = await Course.find();
//         res.json(courses);
//     } catch (error) {
//         res.status(500).json({ message: 'Server error' });
//     }
// };


// const Course = require('../models/courseModel');

// const courses = [
//   { title: 'Course 1', duration: '2 hours' },
//   { title: 'Course 2', duration: '3 hours' },
//   { title: 'Course 3', duration: '1 hour' }
// ];

// const getCourses = async (req, res) => {
//   await Course.insertMany(courses);
//   const courses = await Course.find();
//   res.json(courses);
// };

// module.exports = { getCourses };


// const Course = require('../models/courseModel');

// const initialCourses = [
//   { title: 'Course 1', duration: '2 hours' },
//   { title: 'Course 2', duration: '3 hours' },
//   { title: 'Course 3', duration: '1 hour' }
// ];

// const getCourses = async (req, res) => {
//   try {
//     // Insert initial courses if not already in the database
//     await Course.insertMany(initialCourses, { ordered: false });
//     // Fetch all courses
//     const allCourses = await Course.find();
//     res.json(allCourses);
//   } catch (error) {
//     if (error.code === 11000) {
//       // Handle duplicate key error (if a course already exists)
//       const allCourses = await Course.find();
//       res.json(allCourses);
//     } else {
//       res.status(500).json({ message: 'An error occurred while fetching courses', error });
//     }
//   }
// };

// module.exports = { getCourses };

const Course = require('../models/courseModel');

const courses = [
  { title: 'Course 1', duration: '2 hours' },
  { title: 'Course 2', duration: '3 hours' },
  { title: 'Course 3', duration: '1 hour' }
];

const getCourses = async (req, res) => {
  try {
    const existingCourses = await Course.find();
  
    if (existingCourses.length === 0) {
      await Course.insertMany(courses);
    }
    
    // Fetch all courses
    const allCourses = await Course.find();
    res.json(allCourses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses', error });
  }
};

module.exports = { getCourses };
