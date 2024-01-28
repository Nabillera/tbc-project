import React, {useState} from 'react'
import Arrow from '../images/arrow-down.svg'
import '../styles/FAQsItem.css'

const FAQsItem = ({question, answer, isOpen, toggle}) => {

  return (
    <div id='faqs-item-container'>
      <div id='faqs-question-container' onClick={toggle} style={{paddingBottom: isOpen ? '20px' : '0'}}>
        <p id='faqs-question'>{question}</p>
        <img id='faqs-arrow' src={Arrow} style={{transform: isOpen? 'rotate(90deg)' : 'rotate(270deg)'}}/>
      </div>
        
      <p id='faqs-answer' style={{ height: isOpen ? 'fit-content' : '0px' }}>{answer}</p>
        
    </div>
  )
}

export default FAQsItem