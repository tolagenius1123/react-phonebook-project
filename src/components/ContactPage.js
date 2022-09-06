import React, { useState } from 'react'
import AddContact from './AddContact'
import ContactList from './ContactList'
import '../App.css'

const ContactPage = () => {

  const [contact, setContact] = useState([
    {
      id: new Date().getTime(),
      fullname: "Jinadu Omotola",
      phoneNo: "08141366380",
    },
    // {
    //   id: new Date().getTime(),
    //   fullname: "James Afolabi",
    //   phoneNo: "08141366380",
    // },
    // {
    //   id: new Date().getTime(),
    //   fullname: "Kolawale Emmanuel",
    //   phoneNo: "08141366380",
    // },

  ])

  const handleAddContact = (newContact) => {
    console.log(newContact);
    setContact([...contact, newContact]) 
  }

  return (
    <div className='contact-page'>
        <div className='contact-page-left'>
            <AddContact  
                handleAddContact={handleAddContact}
            />
        </div>
        <div className='contact-page-right'>
            <ContactList contacts={contact}/>        
        </div>
    </div>
  )
}

export default ContactPage