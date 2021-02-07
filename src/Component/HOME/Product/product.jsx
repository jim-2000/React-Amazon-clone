import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Container, Row, Col } from 'reactstrap';

import './Product.css'
import { UseStatevalue } from '../../StateProvider/StateProvider';
// import Button from '@meterial-ui/core/Button'
function Product({ id, title, rating, price, image }) {
    const [{ basket }, dispathch] = UseStatevalue()

    const addToBasket = () => {
        // dispathch The item in to the data layer 
        dispathch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })

    }


    return (
        <div>
            {/* <Bootstrap />
            <Bootstrap /> */}

            <Container className="themed-container cont" fluid="lg">
                <div className=' product'>
                    <div className="product_info">
                        <h6>{title} </h6>
                        <p className='product_price'>
                            <small>$</small>
                            <strong>{price}</strong>
                        </p>

                    </div>
                    <div className="product_ratting">
                        {Array(rating).fill().map((_, i) => (
                            <StarBorderIcon />
                        ))}

                    </div>
                    <div className='product_img'>
                        <img src={image} alt="" />
                    </div>
                    <div className="poduct_button">
                        <button onClick={addToBasket} className='button' >add to cart </button>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Product;