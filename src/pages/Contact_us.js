import React from 'react'
import { Form,FloatingLabel } from 'react-bootstrap'

const Contact_us = () => {
    return (
        <>
        <h1 className='txt'>
            Contact Us
        </h1>
        <hr/>
        <Form >
     
  <FloatingLabel controlId="floatingTextarea2" label="Name" className='mb-3'>
    <Form.Control
      as="textarea"
      placeholder="enter your name"
      style={{ height: '50px' }}
    />
  </FloatingLabel> 
 
  <FloatingLabel controlId="floatingTextarea2" label="Email Address ">
    <Form.Control
      type='Email'
      placeholder="Enter your Email"
      style={{ height: '50px' }}
    />
  </FloatingLabel> 
  <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>  



  <FloatingLabel controlId="floatingTextarea2" label="Comments">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>  
 
</Form>
        
        </>
    )
}

export default Contact_us
