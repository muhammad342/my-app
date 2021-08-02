import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory ,useLocation } from 'react-router-dom';

const Buttons = () => {
    // const location = useLocation()
  

     const history = useHistory()
      

    return (
        <>
           
          <Button variant="danger" className='btn' onClick={()=>console.log(history.location.pathname)} >Click</Button>   
        </>
    )
}

export default Buttons
