import styled from "styled-components"
export default function Footer() {
    return (<>
        <NavContainer>
            <h3> calle falsa 123 </h3><i className="fa-solid fa-house icon" ></i>  
            <h3> +54 1224124</h3> <i className="fa-solid fa-phone icon"></i>
            <h3>Horarios</h3>
        <p>de Lunes a Viernes de 8 a 12 hs </p>
        <p>de Lunes a Viernes de 13 a 17 hs </p>
        <h3>¿Qué debo presentar?</h3>
        <ul>
          <li>documentos de madre
            /padre/tutor</li>
          </ul>            {/* email random  */}
            < img src="/burbuja.svg" alt="" className='logo' href="/" />
        </NavContainer>
    </>
    )
}
const NavContainer = styled.nav `
*{
    background-color: #27366B;
    display:flex;
    flex-direction: column;
    align-items: center;
    color:white;
  }
  font-family:poppins;

  background-color: #27366B;
    display:flex;
    flex-direction: column;
h3 {
color: white;
margin-top:20px;
}
.icon {
    color: white;
    margin-top:20px;
}
.logo{
    width: 100%;
    position: relative;
    right: 28px;   
  }
`