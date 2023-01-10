import React from 'react'
import Footer from '../includes/Footer'
import BurguerButton from '../components/BurguerButtom'
import { useState } from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import { consultas } from "../services/Consultas"
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// const MySwal = withReactContent(Swal)


export default function Consultas() {
  const [body, setBody] = useState({ nombre: null, apellido: null, email: null, mensajes: null })
  console.log(body)
  const seting = e => {
    setBody({
      ...body,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit = async (e) => {
    try {
      let result = await consultas(body)
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }


  const { register, handleSubmit, formState: { errors } } = useForm();

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
      </NavContainer>
      <Main>
        <div className={`form ${clicked ? 'active' : ''}`}>
          <form >
            <label className="names">Nombre</label>
            <input type="text" id="relleno" name="nombre" onChange={seting}
            // {...register("nombre", {
            //   required: "este campo es obligatorio",
            //   minLength: 2,
            //   maxLength: 10,
            //   message: "minimo dos letras"

            // })}
            />
            <p>{errors.nombre?.message}</p>

            <label className="names">Apellido</label>
            <input type="text" id="relleno" name="apellido" onChange={seting}
            // {...register("apellido", {
            //   required: "este campo es obligatorio",
            //   minLength: 2,
            //   maxLength: 10,
            //   message: "minimo 2 letras"
            // })}


            />
            <p>{errors.apellido?.message}</p>

            <label className="names">Email</label>
            <input type="text" id="relleno" onChange={seting} name="email"
            // {...register("email", {

            //   minLength: 2,
            //   message: "no es un  valido",
            //   required: "este campo es obligatorio",


            // })}

            />
            <p>{errors.email?.message}</p>
            <label className='names'>Mensaje</label>
            <textarea id='relleno' cols="30" rows="8" borde-radius="10px" onChange={seting}
              name="mensajes"
            // name="mensaje"{...register("mensaje", {
            //   minLength: 2,
            //   maxLength: 30,
            //   message: "el campo no puede estar vacio",
            //   required: "este campo es obligatorio",

            // })}


            ></textarea>
            <p>{errors.mensaje?.message}</p>
            <section className='buton'>
              <button type="reset">Cancelar</button>

              <button type='submit' onClick={onSubmit}>Enviar</button>

            </section>
          </form>
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </Main>

      <Footer />
    </>
  )
}

const Main = styled.nav`
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
}
}
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
margin:1.5rem;   }
@media (min-width: 768px){
.form{
  border-radius:44px;
  padding: 10px;
  fonst-size:20px;
  width: 60%;
  align-items: center;
  margin: 10rem;
  margin-top: 50px;
     p{
  color: white;
  font-size: 12px;  
}
#relleno {
  margin:15px;
  padding:3px;
  border-radius:10px;
 }
 .names{
  color: white;
  margin: 18px;
  display: flex
 }
 button{
  padding: 10px;
  font-size:20px;
  color:white;
  background-color: #27366B;
  border:none;
  
}
}
}

@media (min-width: 1024px){
  *{
    font-size:21px;
    color:white;
    font-family:poppins

  }
  .form{
    border-radius:44px;
    padding: 10px;
    width: 60%;
    font-size: 20px;
    align-items: center;
    margin: auto;
    margin-top: 50px;
       p{
    color: white;
    font-size: 12px;  
  }
  #relleno {
    margin:15px;
    padding:5px;
    border-radius:10px;
    width:100%;
   }
   .names{
    color: white;
    margin: 18px;
    display: flex
   }
   .buton{
    padding: 10px;
    color:white;
    background-color: #27366B;
    border:none;
    
  }
  }

}

`
const NavContainer = styled.nav`
*{
  font-family:poppins;

}
    .header {
        background-color: #27366B;
        display:flex;
        align-items: center;
        justify-content: space-between;
        font-family:poppins;

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
            display: inline;}}}
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
