import React from 'react'
import { Card} from 'react-bootstrap'

const About = () => {
    return (
        <>
        <h1 className='txt'>
            About US
        </h1>
        <hr/>
        <div className='di'>
        <Card style={{ width: '18rem'} } >
            <Card.Title className='txt py-3 '>
              About US
            </Card.Title>
            <Card.Body>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
      the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        
</div>
        </>
    )
}

export default About
