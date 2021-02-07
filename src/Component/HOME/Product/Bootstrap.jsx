import { Container, Row, Col } from 'reactstrap';
import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Button } from 'reactstrap';
import './Boots.css'
function Bootstrap() {
    return (
        <div>
            <Container className='themed-container' fluid='lg' >
                <Row >
                    <Col xs='6'>
                        <Row className='product'>
                            <Col xs='12'>
                                <div className='product_info'>
                                    <h6>The learn Start up </h6>
                                    <p className='product_price'>
                                        <small>$</small>
                                        <strong>20.2</strong>
                                    </p>
                                </div>
                                <div className="product_ratting">
                                    <p>
                                        <StarBorderIcon />
                                    </p>
                                </div>
                            </Col>
                            <Col xs='12'>
                                <div className='product_img'>
                                    <img top width="100%" src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                                </div>
                                <div className='add_to_cart'>
                                    <Button color="warning">warning</Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs='6'>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Bootstrap;