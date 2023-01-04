import React from 'react'
import Footer from '../includes/Footer'
import BurguerButton from '../components/BurguerButtom'
import { useState } from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

let endpoint = "http://localhost:4000/mensajes/create"

export default function Consultas() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data) {
    console.log(data);

<<<<<<< HEAD
try {
  let result = axios.post(endpoint, data)
  if (data) {
    {
      MySwal.fire({
        position: 'center',
        icon: 'success',
        title: 'Inscripción correcta',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
} catch (error) {
 MySwal.fire({
   position: 'center',
   icon: 'error',
   title: 'Inscripción incorrecta',
   showConfirmButton: false,
   timer: 1500
 })}
     
    
  
}
=======
    return
  }
  async e => {
    e.preventDefault()
    let result = await axios.post(endpoint, onSubmit, data)
    // no se envia la data , pero si se almacena todo en data 
    if (result.data) {
      {
        MySwal.fire({
          position: 'center',
          icon: 'success',
          title: 'Inscripción correcta',
          showConfirmButton: false,
          timer: 1500
        })

      }
    }
  }

>>>>>>> dafa5ffb306937e2834623e441016bc7e33983b8
  return (
    <>
      <NavContainer>
        <div className={`header ${clicked ? 'active' : ''}`}>
          <img src="/burbuja.svg" className='logo' href="../" />    {/*problemas aca */}
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="/">Inicio</a>
          <a onClick={handleClick} href="./Incripcion">Incrcipcion</a>
        </div>

        <div className={`forms ${clicked ? 'active' : ''}`}>
<<<<<<< HEAD


          <form onSubmit={handleSubmit((onSubmit()))}>
=======
          <form onSubmit={handleSubmit((onSubmit))}>
>>>>>>> dafa5ffb306937e2834623e441016bc7e33983b8

            <label className="names">Nombre</label>
            <input type="text" id="relleno" {...register("nombre", {
              required: "este campo es obligatorio",
              minLength: 2,
              maxLength: 10,
              message: "minimo dos letras"

            })} />
            <p>{errors.nombre?.message}</p>

            <label className="names">Apellido</label>
            <input type="text" id="relleno"{...register("apellido", {
              required: "este campo es obligatorio",
              minLength: 2,
              maxLength: 10,
              message: "minimo 2 letras"
            })} />
            <p>{errors.apellido?.message}</p>

            <label className="names">Email</label>
            <input type="text" id="relleno"  {...register("email", {
              minLength: 2,
              message: "no es un  valido",
              required: "este campo es obligatorio",


            })} />
            <p>{errors.email?.message}</p>
            <label className='names'>Mensaje</label>
            <textarea id='relleno' cols="30" rows="8" borde-radius="10px"  {...register("mensaje", {
              minLength: 2,
              maxLength: 30,
              message: "el campo no puede estar vacio",
              required: "este campo es obligatorio",

            })} ></textarea>
            <p>{errors.mensaje?.message}</p>
            <section className='button'>
              <button type="reset">Cancelar</button>

              <button type='submit' onClick={onSubmit()}>Enviar</button>

            </section>
          </form>
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
      <Footer />
    </>
  )
}


const NavContainer = styled.nav`
*{
  font-family:poppins;
}
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
          font-family:poppins;
        }
      }
        .forms{
          background-color: #27366B;
          align-items: baseline;
          display:flex;
          flex-direction: column;
          border-radius:44px;
          padding: 10px;
          width: 89%;
          margin: 15px;
          margin-top: 50px;
             p{
          color: white;
          text-align: center;
          font-size: 12px;  
        }
      }
        @media(min-width: 768px){
          position: initial;    
          margin: 0;
          a{
            font-size: 1rem;
            pading: 1rem;
            display: flex;
            justify-content: space-around;
            color: white;
            font-family:poppins;
            display: inline;}
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
          margin-top: 5rem;
          display:block;

          color: white;}}
      .logo{
       width:50%;
       margin: -12px 21px 12px -45px;
      }
    //    .forms{
    //     background-color: #27366B;
    //     align-items: center;
    //     display:flex;
    //     flex-direction: column;
    //     border-radius:44px;
    //     padding: 10px;
    //     width: 70%;
    //     margin: 6rem;
    //     margin-top: 40px;
    //     p{
    //       color: white;
    //       text-align: center;
    //       font-size: 12px;  
    //     }
    // }
    .names {
      color: white;
      margin: 24px;
      display: block;
    }
    #relleno {
      margin:15px;
      padding:3px;
      border-radius:10px;}
     .forms.active{
      visibility:hidden;}
button{
  padding: 10px;
  color:white;
  background-color: #27366B;
  border:none;
margin:1.5rem; }


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
      }`
