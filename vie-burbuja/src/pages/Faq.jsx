import styled from 'styled-components'
import BurguerButton from '../components/BurguerButtom'
import  Header  from '../includes/Header'
import Footer  from '../includes/Footer'
import { useState, UseEffect } from 'react'
export default function Navbar(props) {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
  
      <NavContainer>
        <div className='header'>

        <img src="/burbuja.svg" alt="" className='logo' href="/" />
        <a onClick={handleClick} href="/">Inicio</a>
        </div>
      

      <h3> probando que anda</h3>
      </NavContainer>
      {/* <Footer /> */}
    </>

  )
}

const NavContainer = styled.nav`
.header {
  background-color: #27366B;
}
.logo{
  position:relative;
  right:10px
}
 
`