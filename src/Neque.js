import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fea from './features-2.png';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Neque() {
    return (
        <Container>
            <Row className='neque'>
                <Col className='ne1'>
                    <h2>Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero</h2>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="SAEPE FUGA">
                            <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                            <br></br>
                            <h5>Repudiandae rerum velit modi et officia quasi facilis</h5>
                            <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                            <h5>
                                Incidunt non veritatis illum ea ut nisi</h5>
                            <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
                        </Tab>
                        <Tab eventKey="profile" title="VOLUPTATES">
                        <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                            <br></br>
                            <h5>Repudiandae rerum velit modi et officia quasi facilis</h5>
                            <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                            <h5>
                                Incidunt non veritatis illum ea ut nisi</h5>
                            <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
                        </Tab>
                        <Tab eventKey="contact" title="CORRUPTI" >
                        <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                            <br></br>
                            <h5>Repudiandae rerum velit modi et officia quasi facilis</h5>
                            <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                            <h5>
                                Incidunt non veritatis illum ea ut nisi</h5>
                            <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>

                        </Tab>
                    </Tabs>
                </Col>

                <Col className='ne2'>
                    <img src={fea} alt="" height={400} />

                </Col>
            </Row>

        </Container>
    );
}

export default Neque;