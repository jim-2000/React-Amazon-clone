import React from 'react';
import './Checkout.css'
import { Row, Col, Container } from 'reactstrap';
import Subtotal from './Subtotal'
import SubtotalBasket from './SubtotalBasket';
import { UseStatevalue } from '../StateProvider/StateProvider';
import CheckoutProduct from './CheckoutProduct';


function Checkout(props) {
    const [{ basket },  ] = UseStatevalue()
    return (
        <Container fluid> 
            <div>
                <Row md={2} className="my-5">
                    <Col xs='6'>
                        <img className='banner' src="https://www.imagesthatsell.com.au/blog/wp-content/uploads/2017/05/Banner-5.jpg" />
                        <h2 className='shoping_title'>Your Shping Buscket</h2>

                    </Col>
                    <Col xs='6' className='my-3' >
                        <Subtotal />
                        <SubtotalBasket />

                    </Col>
                </Row>
                <Row >

                    <Col xs='6'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </Col>


                </Row>

            </div>
        </Container>
    );
}

export default Checkout;