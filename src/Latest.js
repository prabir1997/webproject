import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import p1 from './portfolio-1.jpg';
import p2 from './portfolio-2.jpg';
import p3 from './portfolio-3.jpg';
import p4 from './portfolio-4.jpg';
import p5 from './portfolio-5.jpg';
import p6 from './portfolio-6.jpg';
import p7 from './portfolio-7.jpg';
import p8 from './portfolio-8.jpg';
import p9 from './portfolio-9.jpg';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function UncontrolledExample() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [lgShow1, setLgShow1] = useState(false);
    const [lgShow2, setLgShow2] = useState(false);
    const [lgShow3, setLgShow3] = useState(false);
    const [lgShow4, setLgShow4] = useState(false);
    const [lgShow5, setLgShow5] = useState(false);
    const [lgShow6, setLgShow6] = useState(false);
    const [lgShow7, setLgShow7] = useState(false);
    const [lgShow8, setLgShow8] = useState(false);
    const [lgShow9, setLgShow9] = useState(false);

    return (<>
        <Container>
            <Row className='port'>
                <Col>
                    <b>PORTFOLIO</b>
                    <h1>Check our latest work</h1>
                </Col>
            </Row>
        </Container>
        <Tabs
            // defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 late">

            <Tab eventKey="home" title="All">
                <Container><Row className='frow'>
                    <Col className='fmda'>
                        <img src={p1} height={250} />
                        <Button className='mda' onClick={() => setLgShow1(true)}> <b>+</b></Button>
                        <Modal
                            size="lg"
                            show={lgShow1}
                            onHide={() => setLgShow1(false)}
                            aria-labelledby="example-modal-sizes-title-lg">                    
                            <Modal.Body>
                                <img src={p1} height={500} />
                            </Modal.Body>
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    App 1
                                </Modal.Title>
                            </Modal.Header>
                        </Modal>
                    </Col>
                    <Col className='fmda'>        <img src={p2} height={250} />
                    <Button className='mda' onClick={() => setLgShow2(true)}> <b>+</b></Button>
                        <Modal
                            size="lg"
                            show={lgShow2}
                            onHide={() => setLgShow2(false)}
                            aria-labelledby="example-modal-sizes-title-lg">                    
                            <Modal.Body>
                                <img src={p2} height={500} />
                            </Modal.Body>
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    App 1
                                </Modal.Title>
                            </Modal.Header>
                        </Modal>
                    </Col>
                    <Col className='fmda'>        <img src={p3} height={250} />
                    <Button className='mda' onClick={() => setLgShow3(true)}> <b>+</b></Button>
                        <Modal
                            size="lg"
                            show={lgShow3}
                            onHide={() => setLgShow3(false)}
                            aria-labelledby="example-modal-sizes-title-lg">                    
                            <Modal.Body>
                                <img src={p3} height={500} />
                            </Modal.Body>
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    App 1
                                </Modal.Title>
                            </Modal.Header>
                        </Modal>
                    </Col>
                </Row>
                    <Row className='frow'>
                        <Col className='fmda'>
                            <img src={p4} height={250} />
                            <Button className='mda' onClick={() => setLgShow4(true)}> <b>+</b></Button>
                        <Modal
                            size="lg"
                            show={lgShow4}
                            onHide={() => setLgShow4(false)}
                            aria-labelledby="example-modal-sizes-title-lg">                    
                            <Modal.Body>
                                <img src={p4} height={500} />
                            </Modal.Body>
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    App 1
                                </Modal.Title>
                            </Modal.Header>
                        </Modal>
                        </Col>
                        <Col className='fmda'>        <img src={p5} height={250} />
                        <Button className='mda' onClick={() => setLgShow5(true)}> <b>+</b></Button>
                        <Modal
                            size="lg"
                            show={lgShow5}
                            onHide={() => setLgShow5(false)}
                            aria-labelledby="example-modal-sizes-title-lg">                    
                            <Modal.Body>
                                <img src={p5} height={500} />
                            </Modal.Body>
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    App 1
                                </Modal.Title>
                            </Modal.Header>
                        </Modal>
                        </Col>
                        <Col className='fmda'>        <img src={p6} height={250} />
                        <Button className='mda' onClick={() => setLgShow6(true)}> <b>+</b></Button>
                        <Modal
                            size="lg"
                            show={lgShow6}
                            onHide={() => setLgShow6(false)}
                            aria-labelledby="example-modal-sizes-title-lg">                    
                            <Modal.Body>
                                <img src={p6} height={500} />
                            </Modal.Body>
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    App 1
                                </Modal.Title>
                            </Modal.Header>
                        </Modal>
                        </Col>
                    </Row>
                </Container>

            </Tab>
            <Tab eventKey="profile" title="App">
                <Container><Row className='frow'>
                        <Col className='fmda'>
                            <img src={p4} height={250} />
                            <Button className='mda' onClick={() => setLgShow4(true)}> <b>+</b></Button>
                        <Modal
                            size="lg"
                            show={lgShow4}
                            onHide={() => setLgShow4(false)}
                            aria-labelledby="example-modal-sizes-title-lg">                    
                            <Modal.Body>
                                <img src={p4} height={500} />
                            </Modal.Body>
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    App 1
                                </Modal.Title>
                            </Modal.Header>
                        </Modal>
                        </Col>
                        <Col className='fmda'>        <img src={p5} height={250} />
                        <Button className='mda' onClick={() => setLgShow5(true)}> <b>+</b></Button>
                        <Modal
                            size="lg"
                            show={lgShow5}
                            onHide={() => setLgShow5(false)}
                            aria-labelledby="example-modal-sizes-title-lg">                    
                            <Modal.Body>
                                <img src={p5} height={500} />
                            </Modal.Body>
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    App 1
                                </Modal.Title>
                            </Modal.Header>
                        </Modal>
                        </Col>
                        <Col className='fmda'>        <img src={p6} height={250} />
                        <Button className='mda' onClick={() => setLgShow6(true)}> <b>+</b></Button>
                        <Modal
                            size="lg"
                            show={lgShow6}
                            onHide={() => setLgShow6(false)}
                            aria-labelledby="example-modal-sizes-title-lg">                    
                            <Modal.Body>
                                <img src={p6} height={500} />
                            </Modal.Body>
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    App 1
                                </Modal.Title>
                            </Modal.Header>
                        </Modal>
                        </Col>
                    </Row></Container>
            </Tab>
            <Tab eventKey="contact" title="Card">
                <Container><Row className='frow'>
                    <Col className='fmda'>
                        <img src={p1} height={250} />
                        <Button className='mda' onClick={() => setLgShow1(true)}> <b>+</b></Button>
                        <Modal
                            size="lg"
                            show={lgShow1}
                            onHide={() => setLgShow1(false)}
                            aria-labelledby="example-modal-sizes-title-lg">                    
                            <Modal.Body>
                                <img src={p1} height={500} />
                            </Modal.Body>
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    App 1
                                </Modal.Title>
                            </Modal.Header>
                        </Modal>
                    </Col>
                    <Col className='fmda'>        <img src={p2} height={250} />
                    <Button className='mda' onClick={() => setLgShow2(true)}> <b>+</b></Button>
                        <Modal
                            size="lg"
                            show={lgShow2}
                            onHide={() => setLgShow2(false)}
                            aria-labelledby="example-modal-sizes-title-lg">                    
                            <Modal.Body>
                                <img src={p2} height={500} />
                            </Modal.Body>
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    App 1
                                </Modal.Title>
                            </Modal.Header>
                        </Modal>
                    </Col>
                    <Col className='fmda'>        <img src={p3} height={250} />
                    <Button className='mda' onClick={() => setLgShow3(true)}> <b>+</b></Button>
                        <Modal
                            size="lg"
                            show={lgShow3}
                            onHide={() => setLgShow3(false)}
                            aria-labelledby="example-modal-sizes-title-lg">                    
                            <Modal.Body>
                                <img src={p3} height={500} />
                            </Modal.Body>
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    App 1
                                </Modal.Title>
                            </Modal.Header>
                        </Modal>
                    </Col>
                </Row></Container>
            </Tab>
            <Tab eventKey="conta" title="Web">
                <Container><Row className='frow'>
                        <Col className='fmda'>
                            <img src={p4} height={250} />
                            <Button className='mda' onClick={() => setLgShow4(true)}> <b>+</b></Button>
                        <Modal
                            size="lg"
                            show={lgShow4}
                            onHide={() => setLgShow4(false)}
                            aria-labelledby="example-modal-sizes-title-lg">                    
                            <Modal.Body>
                                <img src={p4} height={500} />
                            </Modal.Body>
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    App 1
                                </Modal.Title>
                            </Modal.Header>
                        </Modal>
                        </Col>
                        <Col className='fmda'>        <img src={p5} height={250} />
                        <Button className='mda' onClick={() => setLgShow5(true)}> <b>+</b></Button>
                        <Modal
                            size="lg"
                            show={lgShow5}
                            onHide={() => setLgShow5(false)}
                            aria-labelledby="example-modal-sizes-title-lg">                    
                            <Modal.Body>
                                <img src={p5} height={500} />
                            </Modal.Body>
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    App 1
                                </Modal.Title>
                            </Modal.Header>
                        </Modal>
                        </Col>
                        <Col className='fmda'>        <img src={p6} height={250} />
                        <Button className='mda' onClick={() => setLgShow6(true)}> <b>+</b></Button>
                        <Modal
                            size="lg"
                            show={lgShow6}
                            onHide={() => setLgShow6(false)}
                            aria-labelledby="example-modal-sizes-title-lg">                    
                            <Modal.Body>
                                <img src={p6} height={500} />
                            </Modal.Body>
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    App 1
                                </Modal.Title>
                            </Modal.Header>
                        </Modal>
                        </Col>
                    </Row></Container>
            </Tab>
        </Tabs>
    </>
    );
}

export default UncontrolledExample;