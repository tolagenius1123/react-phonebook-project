import React from 'react'
import '../App.css'
import contact from '../assets/contact.png'


const ContactCard = ({key, fullname, phoneNo}) => {
  return (
    <div className='contact'>
      <div className='contact-img'>
          <img src={contact} alt="" />
      </div>
      <div className='contact-details'>
          <p>{fullname}</p>
          <p>{phoneNo}</p>
      </div>
    </div>
  )
}

export default ContactCard