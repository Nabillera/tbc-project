import React, { useState } from 'react'
import {FAQ} from '../constants/information.js'
import '../styles/FAQs.css'
import FAQsItem from './FAQsItem.js'

const FAQs = () => {

  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (index) => {
    setOpenIndex((previousIndex) => previousIndex === index? null : index)
  }

  return (
    <div id='faqs-container'>
      <div id='faqs-items-container'>
        <span id='faqs-title'>ხშირად დასმული კითხვები</span>

        {FAQ.map((faq, index) => (
          <FAQsItem
          key={index} 
          question={faq.question}
          answer={faq.answer}
          isOpen={index === openIndex}
          toggle={() => toggle(index)}
          />
        ))}

        <a id='all-faqs-link'>ყველა კითხვა</a> 
      </div>
    </div>
  )
}

export default FAQs