import React from 'react';
import './Header.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { UseStatevalue } from '../StateProvider/StateProvider';

//
function HeaderBasket() {
    const [{ basket }, dispatch] = UseStatevalue()

    return (
        <div>
            <div className='bask'>
                <ShoppingBasketIcon />
                <span className='headerOptionLineTwo_count'>{basket.length}</span>

            </div>

        </div>
    );
};

export default HeaderBasket;