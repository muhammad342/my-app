import React from 'react'
import Gallery from './Gallery'
import pictures from '../pictures'
import {Row,Col} from 'react-bootstrap'
import Contact_us from './Contact_us'




const Home = () => {
    return (
        <>
       

        <section>
        <h1>
            Gallery:
        </h1>

      <Row>
              {pictures.map((picture)=>(
                  <Col  sm={12} md={6} lg={4} xl={3}>
                  <Gallery picture={picture} />
                  
                  </Col>
              ))}
              </Row>
              </section>  
         
        </>
    )
}

export default Home
