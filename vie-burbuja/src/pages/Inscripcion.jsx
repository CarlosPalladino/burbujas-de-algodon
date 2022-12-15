import React from 'react'
import BurguerButton from '../components/BurguerButtom'
import { useState, UseEffect } from 'react'
import styled from 'styled-components'
export default function Incripcion() {
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
        <div className={`form ${clicked ? 'active' : ''}`}>
          <label className="names">Nombre</label>
          <input type="text" id="relleno"/>
          <label className="names">Apellido</label>
          <input type="text" id="relleno"/>
          <label className="names">Email</label>
          <input type="text" id="relleno"  />

          <h3>Hijos</h3>

          <label className="names">Nombre</label>
          <input type="text"  id="relleno"  />
          <label className="names">Apellido</label>
          <input type="text"  id="relleno"  />
          <label className="names">turno</label>
          <select name ="turno"id="turno">
          <option value="mañana">mañana</option>
          <option value="mañana">tarde</option>

          </select>

          <div className="buton">
            <button type="reset">Cancelar</button>
            <button type="submit" value="Submit">Enviar</button>
          </div>
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>

      </NavContainer>
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
      color: white;ÑÑ
    }
  }
  .logo{
   width:50%;
   margin: -12px 21px 12px -45px;
  }
   .form{
    background-color: #27366B;
    align-items: baseline;
    display:flex;
    flex-direction: column;
    border-radius:44px;
    padding: 10px;
    width: 89%;
    margin: auto;
    margin-top: 50px;
}
.form.active{
  visibility:hidden;
}
    h3{
      color: white;
      margin:4px;
    }   }
 #relleno {
  margin:10px;
  margin-top:2px;
  border-radius:10px;
 }
 #turno{
  width:65%;
  margin: 10px;
  margin-top: 2px;
  border-radius: 10px;
 }
 .names{
  color: white;
 }
 .buton{
  display:flex;
  justify-content:space-around;
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
  }
  `