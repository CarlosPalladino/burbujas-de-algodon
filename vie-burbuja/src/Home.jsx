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
      <NavContainer>
        <div className='objetivos' >
 <h3>Nuestra institucion</h3>
          <p> Brindamos a nuestros alumnos una educación integral y formación de las pirmeras enseñanzas</p>
          <h3>Deportes</h3>
          <p> Contamos con un ambiente cuidado para que en cada actividad a realizar 100% seguro </p>
          <h3> Nuestros objetivos</h3>
          <p>
            Ofrecer una educación formal, incorporada a la enseñanza oficial, que los forme como sujetos competentes en donde se favorezca el desarrollo de sus habilidades para acceder a mejores condiciones de vida,
          </p>


          <h3> Nuestros objetivos</h3>
                    <p>
            Ofrecer una educación formal, incorporada a la enseñanza oficial, que los forme como sujetos competentes en donde se favorezca el desarrollo de sus habilidades para acceder a mejores condiciones de vida,
          </p>
          {/* fondo de de colores aca  */}
        </div>
    
      

      </NavContainer>
      {/* <Footer/>  */}
    </>

  )
}

const NavContainer = styled.nav`
.objetivos{
  text-align: center;
  margin-top:1rem;
  visibility:hidden;
}


`
