import React from 'react'
import BurguerButton from '../components/BurguerButtom'
import { useState, UseEffect } from 'react'
import  Header  from '../includes/Header'
import styled from 'styled-components'

export default function Incripcion() {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)

    }
    return (
        <>
                <Header/>
            <NavContainer>
                <div className='form'>
                </div>
            </NavContainer>
        </>
    )
}
const NavContainer = styled.nav`
.form {
    }

`