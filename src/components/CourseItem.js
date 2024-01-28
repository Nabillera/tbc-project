import React from 'react'
import '../styles/CourseItem.css'
import Arrow from '../images/arrow.svg'

const CourseItem = (props) => {
  return (
    <div id='course-item-container'>
        <img id='course-image'src={props.imageUrl}/>
        <div id='course-description-container'>
          <span id='course-name'>{props.name}</span>
          <p id='course-registration-status'>რეგისტრაცია დასრულებულია</p>
          <div style={{verticalAlign: 'bottom', marginTop: '8px'}}>
            <img src={Arrow}/>
            <span id='course-details'>კურსის დეტალები</span>
          </div>
        </div>
    </div>
  )
}

export default CourseItem