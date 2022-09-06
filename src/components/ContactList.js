import React from 'react'
import '../App.css'
import ContactCard from './ContactCard'

const ContactList = ({contacts}) => {
  return (
    <div className='contact-container'>
        <div className='contacts-list'>
            <h2>Contact List</h2>
            {contacts.map((contact) => {
              return (
                <ContactCard
                  key={contact.id}
                  fullname={contact.fullname}
                  phoneNo={contact.phoneNo}
                />
              )
            })}
        </div>
    </div>
  )
}

export default ContactList