import React from 'react';
import Headernav from './Headernav'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import HeaderBasket from './HeaderBasket'
// main part 


function Header() {
    const arry = {
        all: 'All',
        home: 'Home',
        cloth: 'Cloth',
        Electrical: 'Electric',
        Tv: 'Tv & Fredge'
    }


    return (
        <Container className="themed-container cont" fluid>

            <div className='Header'>
                <Col xs={1}>
                    <Link to="/" >

                        <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" />

                    </Link>
                </Col>
                <Col xs={1} >
                    {/* <div>
                        <select className='select mr-1'>
                            <option value={arry.all} > {arry.all}</option>

                            <option value={arry.home}>{arry.home}</option>
                            <option value={arry.cloth}>{arry.cloth}</option>
                            <option value={arry.Electrical}>{arry.Electrical}</option>
                            <option value={arry.Tv}>{arry.Tv}</option>
                        </select>
                    </div> */}
                </Col>
                <Col xs={6}>
                    <div className='header_search' >
                        <input type='text' className='header_search_input' />
                        <SearchIcon className='header_search_icon' />
                    </div>
                </Col>

                <Col xs={2} >
                    <div className='header_nav ml-0'>
                        <Headernav />
                    </div>
                </Col>
                <Col>
                    <div className="header_basket ml-0">
                        <Link to="/checkout"> <HeaderBasket /> </Link>
                    </div>
                </Col>
            </div>

        </Container>
    );
}

export default Header;