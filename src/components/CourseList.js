import React from 'react'
import '../styles/CourseList.css'
import {courses} from '../constants/information.js'
import CourseItem from './CourseItem'

const CourseList = () => {
  return (
    <div id='course-list-container'>
        <span id='course-list-title'>სასწავლო კურსები</span>
        
        <div id='course-items-container'>
          {courses.map((course, index) => (
              <CourseItem
              key={index}
              imageUrl={course.imageUrl}
              name={course.name}/>
          ))}
        </div>
    </div>
  )
}

export default CourseList