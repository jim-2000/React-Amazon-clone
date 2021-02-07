import React from 'react';
import './Home.css'
import { Container, Row, Col } from 'reactstrap';

import Product from './Product/product'


const Home = () => {
    return (
        <Container>

            <Row >
                <Col xs='12'>
                    <Row className=''>
                        <Col xs='12'>
                            <img className='home_img' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg" alt='amazon_img' />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs='6'>
                    <Product
                        id="1122555346"
                        title="New Leather Jacket"
                        price={20.2}
                        rating={5}
                        image="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                </Col>
                <Col sx='6'>
                    <Product
                        id="1122555448"
                        title="New Firniture "
                        price={100}
                        rating={4}
                        image="https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />

                </Col>
            </Row>
            <Row>
                <Col xs='4'>
                    <Product
                        id="1122555998"
                        title="Leaxary Chair"
                        price={60}
                        rating={3}
                        image="https://images.pexels.com/photos/105004/pexels-photo-105004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

                    />
                </Col>
                <Col sx='4'>
                    <Product
                        id="1122555997"
                        title="Leaxary Chair"
                        price={60}
                        rating={3}
                        image="https://images.pexels.com/photos/105004/pexels-photo-105004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />

                </Col>
                <Col xs='4'>
                    <Product
                        id="1122555996"
                        title="New Firniture "
                        price={100}
                        rating={4}
                        image="https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />

                </Col>
            </Row>
            <Row>
                <Col xs='4'>
                    <Product
                        id="1122555998"
                        title="Leaxary Chair"
                        price={60}
                        rating={3}
                        image="https://images.pexels.com/photos/105004/pexels-photo-105004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

                    />
                </Col>
                <Col sx='4'>
                    <Product
                        id="1122555997"
                        title="Leaxary Chair"
                        price={60}
                        rating={3}
                        image="https://images.pexels.com/photos/105004/pexels-photo-105004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />

                </Col>
                <Col xs='4'>
                    <Product
                        id="1122555996"
                        title="New Firniture "
                        price={100}
                        rating={4}
                        image="https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />

                </Col>
            </Row>
            <Row>
                <Col xs='6'>
                    <Product
                        id="1122555346"
                        title="New Leather Jacket"
                        price={20.2}
                        rating={5}
                        image="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                </Col>
                <Col sx='6'>
                    <Product
                        id="1122555448"
                        title="New Firniture "
                        price={100}
                        rating={4}
                        image="https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />

                </Col>
            </Row>
            <Row>
                <Col xs='4'></Col>
                <Col xs='4'>
                    <Col xs='12' style={{ alignContent: "center" }}>
                        <Product
                            id="1122555995"
                            title="New Glaxi Chair"
                            price={29}
                            rating={5}
                            image="https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

                        />
                    </Col>
                </Col>
                <Col xs='4'>

                </Col>
            </Row>

        </Container>
    );
};

export default Home;