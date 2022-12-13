import styled from 'styled-components'
import Header from '../includes/Header'
import Footer from '../includes/Footer'
import { useState, UseEffect } from 'react'
export default function Navbar(props) {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      {/* el problema son las props ,  dependen del burguer menu para que se activen  */}
      {/* reutilidad de las props ?  */}

        <Header clicked={clicked} handleClick={handleClick} />
      <NavContainer>
      
        
      <div className={`texts ${clicked ? 'active' : ''}`}>
      <h3> probando que anda</h3>
        </div>
        <div> 
           
        </div>
      </NavContainer>
      <Footer />
    </>

  )
}

const NavContainer = styled.nav`

 
`