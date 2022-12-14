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
        <div className={`header ${clicked ? 'active' : ''}`}>
          <img src="/burbuja.svg" alt="" className='logo' href="/" />
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="/">Inicio</a>
          <a onClick={handleClick} href="./pages/Incripcion">Incrcipcion</a>
          <a onClick={handleClick} href="#h">Consultas</a>

        </div>


        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>

      <h3> probando que anda</h3>
      {/* <Footer /> */}
    </>

  )
}
const NavContainer = styled.nav`
.header {
  background-color: #27366B;
  display:flex;
  align-items: center;
  justify-content: space-between;

}
.links {
  position: absolute;
  top: -700px;
  left: -2000px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  transition: all .5s ease;
  a{
    color: white;
    font-size: 2rem;
    display: block;
    text-decoration: none;

  }
  @media(min-width: 768px){
    position: initial;
    margin: 0;
    a{
      font-size: 1rem;
      pading: 1rem;
      justify-content: space-around;
      color: white;
      display: inline;
    }
    display: block;
  }
}
.links.active{
  width: 100%;
  display: block;
  margin:10px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 23%;
  left: 10px;
  right: 10px;
  text-align: center;
  a{
    font-size: 2rem;
    margin-top: 12px;
    color: white;
  }
}
.logo{
 width:50%;
 margin: -12px 21px 12px -45px

}
 .href{
  background-color: white;
 } `
const BgDiv = styled.div`
background-color: #27366B;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 90%;
  z-index: -1;
  transition: all .8s  ;
  &.active{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // border-radius: 0 0 30px 30px;
  }
  `