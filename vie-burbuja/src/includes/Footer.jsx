import styled from "styled-components"
export default function Footer() {
    return (<>
        <NavContainer>
            <h3> calle falsa 123 </h3><i className="fa-solid fa-house icon" ></i>   {/* problemas de iconos */ }
            <h3> +54 1224124</h3><i className="fa-solid fa-phone icon "></i>
            {/* email random  */}
            < img src="/burbuja.svg" alt="" className='logo' href="/" />
        </NavContainer>
    </>
    )
}
const NavContainer = styled.nav `
*{
    font-family:poppins;
    background-color: #27366B;
    display:flex;
    flex-direction: column;
    align-items: center;
  }
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