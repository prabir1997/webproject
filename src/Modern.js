import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img2 from './hero-bg.png';
import img3 from './hero-img.png';



function AutoLayoutExample() {
    return (
        <div className='modern'>
            <img className='img2' src={img2} alt="" height={700} />
            <Container>
                <Row >
                    <Col>
                        <div className='modern2'>

                            <div className='p1'>
                                <h1 className='we'>We offer modern solutions for growing your business</h1>
                                <p className='are'>We are team of talented designers making websites with Bootstrap</p>

                                <button className='btn2'>Get Started  </button>
                            </div></div>

                    </Col>
                    <Col>
                   
                    <div className='p2'>
                        <img src={img3} alt="" />
                    </div>
                   
                     </Col>
                </Row>

            </Container>
        </div>
    );
}

export default AutoLayoutExample;
