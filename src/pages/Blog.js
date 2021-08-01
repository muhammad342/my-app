import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'

const Blog = () => {
    return (
        <>
     
         <Row >
    <Col  className='mb-3'>
          <Card style={{ width: '18rem'  } }>
  <Card.Body>
    <Card.Title >Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"> Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
 
  </Card.Body>
</Card>

</Col>
<Col  className='mb-3'>
          <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"> Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>

  </Card.Body>
</Card>

</Col>
<Col>
          <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title> Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"> Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
 
  </Card.Body>
</Card>

</Col>
</Row>  

        </>
    )
}

export default Blog
