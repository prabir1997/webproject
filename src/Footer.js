import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './logo.png';


function ResponsiveAutoExample() {
  return (
    <>
    <div className="foot">
    <Container >
      <Row>
      <Col sm={4} className='cras'>
     
                    <div className='brand'>
                        <img src={logo} className='img1' />
                        <span className='flex'>     <b >FlexStart</b> </span>
                    </div>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>


               
      </Col>

        <Col sm={8}>
        <Row >
        <Col className='f12'>
        <h6>USEFUL LINKS</h6>
        <p>> Home</p>
        <p>> 
About us</p>
        <p>> Services</p>
        <p>> Terms of service</p>
        <p>> Privacy policy</p>

        </Col>
        <Col className='f12'>
        <h6>OUR SERVICES</h6>
        <p>> Web Design</p>
        <p>> 
        Web Development</p>
        <p>> Services</p>
        <p>> Product Management</p>
        <p>> Graphic Design</p>

        </Col>
        <Col className='f12'>
        <h6>CONTACT US</h6>
        <p>A108 Adam Street <br/>
New York, NY 535022
United States</p>
<p>Phone: +1 5589 55488 </p>
<p>Email: info@example.com</p>
        </Col>
      </Row>
        </Col>
      </Row>
     
    </Container>
    </div>
    </>
  );
}

export default ResponsiveAutoExample;