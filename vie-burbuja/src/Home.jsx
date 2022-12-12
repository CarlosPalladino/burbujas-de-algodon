import styled from 'styled-components'
import Header from './includes/Header'
import Footer from './includes/Footer'
import BurguerButton from './components/BurguerButtom'
import { useState, UseEffect } from 'react'
export default function Navbar() {
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
        <div className='objetivos'>
          <h3> Nuestros objetivos</h3>
          <p>
            Ofrecer una educación formal, incorporada a la enseñanza oficial, que los forme como sujetos competentes en donde se favorezca el desarrollo de sus habilidades para acceder a mejores condiciones de vida,
          </p>
          {/* fondo de de colores aca  */}
        </div>
        <div>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
      

      </NavContainer>
      <Footer/> 
    </>

  )
}

const NavContainer = styled.nav`



`
