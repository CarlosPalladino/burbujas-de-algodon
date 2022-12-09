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
      
        
      <div className={`texts ${clicked ? 'active' : ''}`}>
          <h3 >Nuestra institucion</h3>
          <p>lorem impsun</p>
          <h3>Deportes</h3>
          <p>lorem impsun</p>
        </div>
        <div>
        <BurguerButton clicked={clicked} handleClick={handleClick}             />

        </div>

      </NavContainer>
      <Footer />
    </>

  )
}

const NavContainer = styled.nav`

.texts {
text-align: center;
margin-top:2px; 
h3{
  margin-top:4px
}
}
@media(min-width: 768px){
  display:none;   
}
.texts.active{
  margin-top:27rem;

}


`