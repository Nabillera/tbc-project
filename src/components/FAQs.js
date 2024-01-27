import React from 'react'
import {FAQ} from '../constants/information.js'
import '../styles/FAQs.css'
import FAQsItem from './FAQsItem.js'

const FAQs = () => {
  return (
    <div id='faqs-container'>
      <div id='faqs-items-container'>
        <span id='faqs-title'>ხშირად დასმული კითხვები</span>

        {FAQ.map((faq, index) => (
          <FAQsItem
          key={index} 
          question={faq.question}
          answer={faq.answer}/>
        ))}

        <a id='all-faqs-link'>ყველა კითხვა</a> 
      </div>
    </div>
  )
}

export default FAQs