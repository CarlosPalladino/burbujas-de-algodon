import React from 'react'
import Footer from '../includes/Footer'
import BurguerButton from '../components/BurguerButtom'
import { useState, UseEffect } from 'react'
import styled from 'styled-components'
import axios from "axios";


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'  // de donde sale esto
const MySwal = withReactContent(Swal)                      // de donde sale esto

let consultasApiURl = "http://localhost:4000/mensajes/create"

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
          <a onClick={handleClick} href="./Incripcion">Incrcipcion</a>
          <a onClick={handleClick} href="./Faq">Preguntas</a>
        </div>
        <div className={`forms ${clicked ? 'active' : ''}`}>
          <label className="names">Nombre</label>
          <input type="text" id="relleno" />
          <p id="nombreError" className="msg-error errors"></p>
          <label className="names">Apellido</label>
          <input type="text" id="relleno" />
          <p id="apellidoError" className="msg-error errors"></p>
          <label className="names">Email</label>
          <input type="text" id="relleno" />
          <p id="emailError" className="msg-error errors"></p>
          <label className='names'>Mensaje</label>
          <textarea id='relleno' cols="30" rows="8" borde-radius="10px" ></textarea>
          <section className='button'>
            <button type="reset">Cancelar</button>
            <button type="submit" value="Submit">Enviar</button>
          </section>
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>

      </NavContainer>
      <Footer/>
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
       margin: -12px 21px 12px -45px;
      }
       .forms{
        background-color: #27366B;
        align-items: baseline;
        display:flex;
        flex-direction: column;
        border-radius:44px;
        padding: 10px;
        width: 90%;
        margin: auto;
        margin-top: 50px;
    }
    .names {
      color: white ;
    }
    #relleno {
      margin:15px;
      padding:3px;
      margin-top:2px;
      border-radius:10px;
     }
     .forms.active{
      visibility:hidden;
    }
button{
  padding: 10px;
  color:white;
  background-color: #27366B;
  border:none;
margin:1.5rem; 
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
