 import React, { useState } from 'react'
 import '../App.css'
 
 const AddContact = ({handleAddContact}) => {
    const [fullname, setFullname] = useState("")
    const [phoneNo, setPhoneNo] = useState("")

    const handleName = (e) => {
      setFullname(e.target.value)
      console.log(fullname);
    }

    const handlePhoneNo = (e) => {
      setPhoneNo(e.target.value)
      console.log(phoneNo);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newContact = {
          id: new Date().getTime(),
          fullname: fullname,
          phoneNo: phoneNo,
        }
        handleAddContact(newContact)

    }

    return (
      <div className='addContact'>
        <h2>Add Contact</h2>
        <form className='form' onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full name</label>
            <input type="text" id='fullname' name="fullname" value={fullname} onChange={handleName}/>
            <label htmlFor="phone">Phone no</label>
            <input type="text" id='phoneNo' name='phoneNo' value={phoneNo} onChange={handlePhoneNo} />
            <button type='submit'>Save</button>
        </form>
      </div>
    )
 }
 
 export default AddContact