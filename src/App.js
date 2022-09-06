import React, { useState } from 'react'
import './App.css'
import ContactPage from './components/ContactPage'
import Header from './components/Header'


const App = () => {

	return (
	<div className='app'>
		<Header />
		<ContactPage />
	</div>
	)
}

export default App