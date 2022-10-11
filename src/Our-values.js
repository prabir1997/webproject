import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import val1 from './values-1.png';
import val2 from './values-2.png';
import val3 from './values-3.png';

function ContainerExample() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='our'>
                        <p >OUR VALUES</p>
                        <h1>Odit est perspiciatis laborum et dicta</h1>

                    </div>


                </Col>
            </Row>
            <Row className='odit'>
                <Col>
                    <div className='first'>
<img src={val1} alt="" height={200}/>
<h4>Ad cupiditate sed est odio</h4>
<p>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
                    </div>
                </Col>
                <Col><div className='first'>
                <img src={val2} alt="" height={200}/>
<h4>Voluptatem voluptatum alias</h4>
<p>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
                </div></Col>
                <Col><div className='first'>
                <img src={val3} alt="" height={200}/>
<h4>Ad cupiditate sed est odio</h4>
<p>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
                </div></Col>
            </Row>
        </Container>
    );
}

export default ContainerExample;