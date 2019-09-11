import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {FaArrowLeft} from 'react-icons/fa'
import {Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import image from '../images/blackberry.jpg'
import Alert from 'react-bootstrap/Alert'

class Cart extends Component {
    render() {
        const { cart, total, handleDelete } = this.props;
        return (
            <div className="container mt-5 pt-5 pb-5">
                {(cart.length>0) ? 
                 <Row>
                 <Col md={8} xs={12}>
                     <h2>Shopping Cart</h2>
                     {
                         cart.map((data, i) =>
                             <Card key={i} className="mt-1 d-flex flex-wrap" border="info">
                                 <Card.Body>
                                 <Row>
                                     <Col>
                                         <div className="cart-img">
                                             <img src={image} alt="cart-image" className="cart-img"/>
                                             </div>
                                     </Col>

                                     <Col>
                                         <h6 className="text-center mt-4">{data.name}</h6>
                                     </Col>

                                     <Col>
                                         <h6 className="text-center mt-4">{data.units}</h6>
                                     </Col>

                                     <Col>
                                         <h6 className="text-center mt-4">{data.price}</h6>
                                     </Col>

                                     <Col>
                                         <h6 className=" delete text-center mt-4 float-right" onClick={handleDelete}>X</h6>
                                     </Col>
                                 </Row>
                                 </Card.Body>

                             </Card>
                         )}
                     <div className="footer mt-5">
                         
                             <span className="float-left"><FaArrowLeft/><Link to="/">Continue Shopping</Link></span>
                         
                         <span className="float-right"><span className="text-muted">subtotal:</span>
                         ${total}</span>

                     </div>
                 </Col>



                 <Col>
                     <Card className="bg-dark text-white">
                         <Card.Body>
                         <Card.Title>
                             Card Details
                         </Card.Title>
                        <Form>
                        <Form.Group>
                                <Form.Label>Card Type</Form.Label>
                                <Form.Control as="select">
                                    <option>Visa</option>
                                    <option>Verve</option>
                                    <option>Master</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Name on Card</Form.Label>
                                <Form.Control type="text"></Form.Control>
                            </Form.Group>

                            <Form.Label>Card Number</Form.Label>
                            <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control/>
                            </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                <Form.Label>Expiration date</Form.Label>
                                <Form.Control/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                <Form.Label>CVV</Form.Label>
                                <Form.Control />
                                </Form.Group>
                            </Form.Row>
                            <Button className="btn btn-lg btn-primary" block>Check out</Button>

                           
                        </Form>
                         
                         </Card.Body>
                 </Card>

                 </Col>
             </Row>
                    
                    : 
                    
                    <Alert variant="danger d-flex flex-wrap">Cart Empty</Alert>}
               



            </div>
        )
    }
}
export default Cart;