import styled from 'styled-components'
import Header from './includes/Header'
import Footer from './includes/Footer'

import { useState, UseEffect } from 'react'
export default function Navbar() {

  return (
    <>
      <Header/>
    <NavContainer>
      <h3>Nuestra insitucion</h3>
      <h3>Deportes</h3>

      
      </NavContainer>
      <Footer /> 
    </>





  )
}

const  NavContainer = styled.nav`
  // margin-top:37rem;
  text-align: center;
  flex-wrap: wrap;


`