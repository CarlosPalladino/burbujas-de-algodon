import styled from 'styled-components'
import Header from './includes/Header'
import Footer from './includes/Footer'
import { useState, UseEffect } from 'react'
export default function Navbar() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <Header clicked={clicked} handleClick={handleClick} />

    <Footer/>  
    </>

  )
}


