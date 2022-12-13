import styled from 'styled-components'
import BurguerButton from '../components/BurguerButtom'
import Footer from '../includes/Footer'
import { useState, UseEffect } from 'react'
export default function Navbar(props) {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
  

      <NavContainer>
      
        
      <h3> probando que anda</h3>
      </NavContainer>
      {/* <Footer /> */}
    </>

  )
}

const NavContainer = styled.nav`

 
`