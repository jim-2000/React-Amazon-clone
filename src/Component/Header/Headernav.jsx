import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase';
import { UseStatevalue } from '../StateProvider/StateProvider';
import './Header.css'
const Headernav = () => {
    const [{ basket, user }] = UseStatevalue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
        }
    }
    return (
        <div className='header_nav'>
            <div className='Header_option'>
                <span className='optionone'>Hello {!user ? "Gest" : user.email}</span>
                <Link to={!user && "/login"}>  <span onClick={handleAuthentication} className='optiontwo'>{user ? 'Sine Out' : 'Sine in '}</span> </Link>

            </div>

            <div className='Header_option'>
                <span className='optionone'>Return</span>
                <span className='optiontwo'>& Order</span>
            </div>
            <div className='Header_option'>
                <span className='optionone'>Your</span>
                <span className='optiontwo'>Prime</span>
            </div>
        </div>
    );
};

export default Headernav;