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
        < img src="/burbuja.svg" className='logo' href="/" />
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="./pages/Incripcion">Incrcipcion</a>
          <a onClick={handleClick} href="./pages/Consultas">Consultas</a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
      <Home>
        <section className={`texts ${clicked ? 'active' : ''}`}>

          <i className="fa-solid fa-house icon"></i>
          <h2>Nuestra institucion</h2>
          <p> Brindamos a nuestros alumnos una educación integral y formación de las pirmeras enseñanzas</p>
          <img src="/imagen-jardin.jpg" alt="jardin" width="350" />

          <h2>Actividades</h2>
          <p> Contamos con un ambiente cuidado para que cada actividad se realice 100% seguro </p>
          <img src="/patio-de-juegos-del-jardin.jpg" width="350" />
          <i className="fa-solid fa-graduation-cap icon"></i>

          <h2> Nuestros objetivos</h2>
          <p>
            Ofrecer una educación formal, incorporada a la enseñanza oficial, que los forme como sujetos competentes en donde se favorezca el desarrollo de sus habilidades para acceder a mejores condiciones de vida,
          </p>

        </section>
      </Home>

    </>
  )
}
const NavContainer = styled.nav`
*{
  font-family:poppins;
  letter-spacing: 5px;
  color:white;
}
  background-color: #27366B;
  display: flex;
  justify-content: space-between;
align-items: center;

.logo{
  width: 50%;
  margin: -12px 21px 12px -45px;
}
  a{
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
      font-size: 1.5rem;
      display: block;
      border-bottom: 2px solid #999;
    }

    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        pading: 1.5rem;
        justify-content: space-around;
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
    a{
      font-size: 2rem;
      margin-top: 12px;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }`
const Home = styled.div`
*{
  text-align:center;
  color:white;
}
.texts {
 font-family:poppins;
  text-align: center;
  background-color:#27366B;
  h2{
    margin-top:2px;
    color:white;
    letter-spacing: 3px;
    border-bottom: 1px solid #999;
    border-top: 1px solid #999;
  }
  p{
  font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.7px;
  }
  }
  .icon{
    color: white;
    font-size:25px;
    margin:6px;
    }
  @media(min-width: 768px){
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
  height: 100%;
  z-index: -1;
  transition: all .8s  ;
  &.active{
    top: 0;
    left: 0;
    width: 100%;
    height: 126%;
  }
`