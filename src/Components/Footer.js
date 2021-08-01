import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
          <footer>
            <Container>
                <Row>
                    <Col className="footer">
                  <strong>  copyright &copy; my-app</strong>
                    </Col>
                </Row>
            </Container>
            
        </footer>   
        </>
    )
}

export default Footer
