import styled from "styled-components"
export default function Footer() {
  return (<>
    <NavContainer>
      {/* <h3> calle falsa 123 </h3><i className="fa-solid fa-house icon" ></i>
      <h3> +54 1224124</h3> <i className="fa-solid fa-phone icon"></i>
      <h3>Horarios</h3> */}
      <h3> Lunes a Viernes de 8 a 12 hs  y  
         13 a 17 hs
          </h3>     
      <h3> </h3>   
        <h3>¿Qué debo presentar?</h3>
      <h3>Papeles de madre/padre/tutor</h3>            {/* email random  */}
      < img src="/burbuja.svg" alt="" className='logo' href="/" />
    </NavContainer>
  </>
  )
}
const NavContainer = styled.nav`
*{
    background-color: #27366B;

    color:white;
  }
  font-family:poppins;
  text-align: center;
  background-color: #27366B;
    display:flex;
    flex-direction: column;
h3 {
margin-top:20px;
letter-spacing:2xpx;
}
p{
  font-size:20px;
}
.icon {
    color: white;
    margin-top:20px;
}
.logo{
    width: 90%;
    position: relative;
    right: 28px;   
  }
  @media (min-width: 768px) {
display:flex;
  }
`