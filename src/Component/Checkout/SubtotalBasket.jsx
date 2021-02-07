import React from 'react';
import { UseStatevalue } from '../StateProvider/StateProvider';

const SubtotalBasket = () => {
    const [{ basket }, dispatch] = UseStatevalue()


    return (
        <div>
            <h1>{basket.title}</h1>

        </div>
    );
};

export default SubtotalBasket;