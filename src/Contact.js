import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BasicExample from './Form';
import Phone from './phone-call.png';
import pin from './pin.png';
import email from './email.png';
import clock from './clock.png';

function Contact() {
    return (
        <Container>
            <Row className='port'>
                <Col>

                    <p>CONTACT</p>
                    <h1>Contact Us</h1>
                </Col>
            </Row>
            <Row>
                <Col className="address">
                    <Row className='row11'>
                        <Col >
                            <div className='row121'> 
                            <img src={pin} height={40} />

                            <h4>Address</h4>
                            <p>A108 Adam Street,</p>
                            <p>New York, NY 535022</p>
                            </div>
                           
                        </Col>
                        <Col >
                          
                            <div className='row121'> 
                            <img src={Phone} height={30} />
                            <h4>Call Us</h4>
                            <p>+1 5589 55488 55</p>
                            <p>+1 6678 254445 41</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='row11'>
                        <Col >
                           
                            <div className='row121'> 
                            <img src={email} height={40} />

                            <h4>Email Us</h4>
                            <p>info@example.com</p>
                            <p>contact@example.com</p>
                            </div>
                        </Col>
                        <Col >
                           
                            <div className='row121'> 
                            <img src={clock} height={40} />

                            <h4>Open Hours</h4>
                            <p>Monday - Friday</p>
                            <p>9:00AM - 05:00PM</p>
                            </div>
                        </Col>
                    </Row>

                </Col>
                <Col>
                <BasicExample/>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;