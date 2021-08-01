import React from 'react'
import {Card,Row,Col} from 'react-bootstrap'
import pictures from '../pictures'

const Gallery = () => {
    return (
        <>
         <section>
        <h1>
            Gallery:
        </h1>

      <Row>
              {pictures.map((picture)=>(
                  <Col  sm={12} md={6} lg={4} xl={3}>
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
                  </Col>
              ))}
              </Row>
              </section> 
      
     
        </>
    )
}

export default Gallery
