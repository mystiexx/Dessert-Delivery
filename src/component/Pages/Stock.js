import React, { Component} from "react"
import { Container, Card, Button, CardDeck, Form, Modal} from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'

class Stock extends Component {
    constructor(){
        super()
        this.state = {
            modal: false,
            alert: false
        }
        this.handleOpen=this.handleOpen.bind(this);
        
    }

    handleOpen = () => {
        this.setState({modal: !this.state.modal})
    }

    
    
    render() {
        const { id, name, price, image, handleChange } = this.props;
               
        return (
            <div>
                <Container>
                    <CardDeck className="d-flex flex-wrap float-left ml-1 mt-3">
                        <Card className="Card-box" border="light" id={id}>
                        <Card.Img src={image} alt="Card Image" className="card-img"/>
                            <Card.Body>
                                <Card.Text>
                                        <h6>{name}</h6>
                                        <p>${price}</p>
                                        </Card.Text>
                                    <Button variant="dark" onClick={() =>
                                        handleChange({id, name, price, units:1 })}>Add to Cart </Button>
                                    <Button variant="danger ml-2" onClick={this.handleOpen}>Order Now</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>

                    <Modal show={this.state.modal} onHide={this.handleOpen}>
                            <Modal.Body className="p-3">
                                <h5 className="admin-text text-center">Confirm Details</h5>
                                <Form className="p-3">
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Address" className="text-center" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Phone no." className="text-center" />
                                    </Form.Group>
                                    <Form.Group className="button">
                                        <Button className="btn pl-5 pr-5 mt-4">Order</Button>
                                    </Form.Group>

                                </Form>
                            </Modal.Body>
                        </Modal>

                       

                    

                </Container>

            </div>
        )
    }
}

export default Stock;