"use client"
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Mainpage from './components/Mainpage'
import RelatedProduct from './components/RelatedProduct'
import Footer from './components/Footer'

const page = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
     setDarkMode(!darkMode);
  }
  return (
    <div className={`${darkMode && "dark"}`}>
      <Navbar handler={toggleDarkMode} darkMode={darkMode}/>
      <Mainpage />
      <RelatedProduct />
      <Footer />
    </div>
  )
}

export default page