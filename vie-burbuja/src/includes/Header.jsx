import styled from 'styled-components'
import BurguerButton from '../components/BurguerButtom'
import { useState, UseEffect } from 'react'
export default function Navbar() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        < img src="/burbuja.svg" alt="" className='logo' href="/" />
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="/">Inicio</a>
          {/* <a onClick={handleClick} href="#h">Deportes</a> */}
          <a onClick={handleClick} href="./pages/Faq">FaQ</a>
          <a onClick={handleClick} href="./pages/Incripcion">Incrcipcion</a>
          <a onClick={handleClick} href="./pages/Consultas">Consultas</a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
      <Home >
        <div className={`texts ${clicked ? 'active' : ''}`}>
          <h3>Nuestra institucion</h3>
          <p> Brindamos a nuestros alumnos una educación integral y formación de las pirmeras enseñanzas</p>
          <h3>Deportes</h3>
          <p> Contamos con un ambiente cuidado para que en cada actividad a realizar 100% seguro </p>
          <h3> Nuestros objetivos</h3>
          <p>
            Ofrecer una educación formal, incorporada a la enseñanza oficial, que los forme como sujetos competentes en donde se favorezca el desarrollo de sus habilidades para acceder a mejores condiciones de vida,
          </p>

          {/* href */}
        </div>
      </Home>
    </>
  )
}
const NavContainer = styled.nav`
  background-color: #27366B;
  display: flex;
  align-items: center;
  justify-content: space-between;
.logo{
  width: 50%;
  margin: -12px 21px 12px -45px

  ;
  
}
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    font-size: 1rem
  }
  .links{
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
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }`
const Home = styled.div`
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
  visibility: hidden;
    }
    `
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