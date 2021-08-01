import React from 'react'

import pictures from '../pictures'
import {Row,Col,Card} from 'react-bootstrap'





const Home = () => {
    return (
        <>
        <section>
        <div className="header">
    <h1 className='h1'>This is a Banner displaying Some text.</h1> 
</div>
        </section>
        <article>
            <Card className='my-3'>

                <Card.Body>
                    <Card.Text>
                        <p>
                        Some quick example text to build on the card title and make up the bulk of
      the card's content.
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </article>
       

       <section>
           <h4>
               Gallery :
           </h4>
      

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

export default Home
