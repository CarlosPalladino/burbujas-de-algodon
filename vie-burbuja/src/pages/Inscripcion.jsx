import React from 'react'
import Footer from '../includes/Footer';
import BurguerButton from '../components/BurguerButtom'
import { useState } from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import { Incription } from "../services/Incription"

// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// const MySwal = withReactContent(Swal)


export default function Incripcion() {  
  const [body, setBody] = useState({ nombre0: null, apellido0: null, email: null, telefono:null,nombre1: null, apellido1: null, turno:null })
  console.log(body)
  const seting = e => {
    setBody({
      ...body,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit = async (e) => {
    try {
      let result = await Incription(body)
      console.log(result)
    } catch (error) {
      console.error(error)
    }
      // if (result.data) {
      //   MySwal.fire({
      //     position: 'center',
      //     icon: 'success',
      //     title: 'Inscripción correcta',
      //     showConfirmButton: false,
      //     timer: 1500
      //   })
      // }
  }
  const [clicked, setClicked] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <div className={`header ${clicked ? 'active' : ''}`}>
          <img src="/burbuja.svg" className='logo' href="../" />  {/*problemas aca */}
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="/">Inicio</a>
          <a onClick={handleClick} href="./Consultas">Consultas</a>
        </div>
        <section className={`form ${clicked ? 'active' : ''}`}>

          <form onSubmit={handleSubmit((onSubmit))}>

            <label className="names">Nombre</label>
            <input type="text" id="relleno"  name="nombre0" onChange={seting}
            // {...register("nombre", {
            //   required: "este campo es obligatorio",
            //   minLength: 2,
            //   message: "minimo dos letras"

            // })} 
            />
            <p>{errors.nombre?.message}</p>

            <label className="names">Apellido</label>
            <input type="text" id="relleno"  name="apellido0" onChange={seting} 
            //  {...register("apellido", {
            //   required: "este campo es obligatorio",
            //   minLength: 2,
            //   message: "minimo 2 letras"
            // })} 
            />
            <p>{errors.apellido?.message}</p>

            <label className="names" >Email</label>
            <input type="text" id="relleno"  name="email" onChange={seting}
            // {...register("email", {
            //   minLength: 2,
            //   pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            //   message: "no es un  valido"

            // })}
             />
            <p>{errors.email?.message}</p>

            <label className="names" >Telefono</label>
            <input type="number" id="relleno"  name="telefono" onChange={seting}
                    // {...register("telefono", {
            //   required: "este campo es obligatorio",
          

            // })}
            />
            <h3>Hijos</h3>
            <input type="text" id="relleno"  name="nombre1" onChange={seting}
            // {...register("nombre", 
            //   required: "este campo es obligatorio",
            //   minLength: 2,
            //   message: "minimo dos letras"

            // })}
             />
            <p>{errors.nombre?.message}</p>

            <label className="names">Apellido</label>
            <input type="text" id="relleno"  name="apellido1" onChange={seting}
            //  {...register("apellido", {
            //   required: "este campo es obligatorio",
            //   minLength: 2,
            //   message: "minimo 2 letras"
            // })}
             />
            <p>{errors.apellido?.message}</p>

            <label className="names">turno</label>
            <input type="text" id="relleno"  name="turno" onChange={seting}  
                 //  {...register("turno", {
            //   required: "este campo es obligatorio",
            //   minLength: 2,
            //   message: "minimo 2 letras"
            // })}
            />
            <p>{errors.turno?.message}</p>

            <section className="buton" >
              <button type="reset">Cancelar</button>
              <button type="submit">Enviar</button>
            </section>
          </form>
        </section>
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
    }
    .form{
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
    }}
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
    margin: 15px;
    margin-top: 50px;
       p{
    color: white;
    text-align: center;
    font-size: 12px;  
  }}
.form.active{
  visibility:hidden;
}
    h3{
      color: white;
      margin:9px;
      font-size:22px
    }   }
 #relleno {
  margin:15px;
  padding:3px;
  margin-top:2px;
  border-radius:10px;
 }
 #turno{
  width:69%;
  margin: 15px;
  margin-top: 2px;
  border-radius: 10px;
  padding: 3px
 }
 .names{
  color: white;
  margin: 24px;
 }
 button{
  padding: 10px;
  color:white;
  background-color: #27366B;
  border:none;
margin:1.5rem;   } `


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
