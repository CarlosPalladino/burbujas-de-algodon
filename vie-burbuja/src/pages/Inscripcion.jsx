import React from 'react'
import BurguerButton from '../components/BurguerButtom'
export default function Incripcion() {
    return (
<>  
<navBar>
<div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
</navBar>

    <h1>probando que esto esta funcionando</h1>

</>
    )
}