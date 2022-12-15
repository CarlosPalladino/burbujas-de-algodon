import styled from "styled-components"
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {

    return (<>
        <NavContainer>
            <h3> calle falsa 123 </h3> <FontAwesomeIcon icon={faHome} />
            <h3> +54 1224124</h3>  <FontAwesomeIcon icon="fa-solid fa-phone" />
            {/* email random  */}
        </NavContainer>
    </>
    )
}
const NavContainer = styled.nav
    `
h3 {
display: flex;
    background-color: green; 

}
`