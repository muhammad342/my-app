import React from 'react'
import {Card,Container,Row,Col} from 'react-bootstrap'

const Gallery = ({picture}) => {
    return (
        <>
      
       <Card className="my-3 p-3  rounded">
             
                <Card.Img src={picture.image} variant='top' />
           
            <Card.Body>
            <Card.Title as='div'>
           
              
                
                <Card.Text ><strong>{picture.name}</strong></Card.Text> 
           
            </Card.Title>
            <Card.Text as='div'>
               


            </Card.Text>
         
            </Card.Body>
            
          </Card>
        </>
    )
}

export default Gallery
