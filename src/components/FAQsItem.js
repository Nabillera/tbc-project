import React from 'react'
import Arrow from '../images/arrow-down.svg'
import '../styles/FAQsItem.css'

const FAQsItem = (props) => {
  return (
    <div id='faqs-item-container'>
      <div id='faqs-question-container'>
        <p id='faqs-question'>{props.question}</p>
        <img id='faqs-arrow' src={Arrow}/>
      </div>
        
      <p id='faqs-answer'>{props.answer}</p>
        
    </div>
  )
}

export default FAQsItem