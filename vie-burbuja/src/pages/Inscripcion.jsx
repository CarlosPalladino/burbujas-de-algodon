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
  const [body, setBody] = useState({ nombre0: null, apellido0: null, email: null, telefono: null, nombre1: null, apellido1: null, turno: null })
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
          <img src="/burbuja.svg" className='logo' href="../" />  
          {/*problemas aca */}
          <article className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
          </article>
     <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="/">Inicio</a>
          <a onClick={handleClick} href="./Consultas">Consultas</a>
        </div>
      </NavContainer>

      <Main>
        <section className={`form ${clicked ? 'active' : ''}`}>

          <form onSubmit={handleSubmit((onSubmit))}>

            <label className="names">Nombre</label>
            <input type="text" id="relleno" name="nombre0" onChange={seting}
            // {...register("nombre", {
            //   required: "este campo es obligatorio",
            //   minLength: 2,
            //   message: "minimo dos letras"

            // })} 
            />
            <p>{errors.nombre?.message}</p>

            <label className="names">Apellido</label>
            <input type="text" id="relleno" name="apellido0" onChange={seting}
            //  {...register("apellido", {
            //   required: "este campo es obligatorio",
            //   minLength: 2,
            //   message: "minimo 2 letras"
            // })} 
            />
            <p>{errors.apellido?.message}</p>

            <label className="names" >Email</label>
            <input type="text" id="relleno" name="email" onChange={seting}
            // {...register("email", {
            //   minLength: 2,
            //   pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            //   message: "no es un  valido"

            // })}
            />
            <p>{errors.email?.message}</p>

            <label className="names" >Telefono</label>
            <input type="number" id="relleno" name="telefono" onChange={seting}
            // {...register("telefono", {
            //   required: "este campo es obligatorio",


            // })}
            />
            <h2>Hijos</h2>
            <label className="names">Nombre</label>
            <input type="text" id="relleno" name="nombre1" onChange={seting}
            // {...register("nombre", 
            //   required: "este campo es obligatorio",
            //   minLength: 2,
            //   message: "minimo dos letras"

            // })}
            />
            <p>{errors.nombre?.message}</p>

            <label className="names">Apellido</label>
            <input type="text" id="relleno" name="apellido1" onChange={seting}
            //  {...register("apellido", {
            //   required: "este campo es obligatorio",
            //   minLength: 2,
            //   message: "minimo 2 letras"
            // })}
            />
            <p>{errors.apellido?.message}</p>

            <label className="names">turno</label>
            <input type="text" id="relleno" name="turno" onChange={seting}
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
  h2{
    color: white;
    margin:9px;
    font-size:22px;
    border-bottom: 2px solid #999;
    text-align: center;

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
    font-family:poppins;
  }
  .form{
    border-radius:44px;
    padding: 10px;
    width: 60%;
    font-size: 20px;
    align-items: center;
    margin: 13rem;
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
      font-size: 2rem;
      display: block;
      border-bottom: 2px solid #999;

    }

    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        // font-size: 1rem;
        pading: 1rem;
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
        height: 138%;
      }`
