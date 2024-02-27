import React from 'react'
import Navbar from './components/Navbar'
import Mainpage from './components/Mainpage'
import RelatedProduct from './components/RelatedProduct'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Mainpage />
      <RelatedProduct />
      <Footer />
    </div>
  )
}

export default page