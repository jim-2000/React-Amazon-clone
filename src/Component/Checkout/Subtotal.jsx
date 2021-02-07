import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import { getBasketTotal } from '../StateProvider/Reduicer';
import { UseStatevalue } from '../StateProvider/StateProvider';
import './Subtotal.css'
function Subtotal() {
    // consuming our Global basket
    const history = useHistory()
    const [{ basket }] = UseStatevalue();
    // Calculate our basket total 
    return (
        <Container >
            <div className='subtotal'>
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <p>
                                {/* Part of the homework */}
              subtotal ({basket.length}): <strong>{value}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" /> This order contains a gift

                        </small>


                        </>
                    )}
                    decimalScale={0}
                    value={getBasketTotal(basket)} // it's come form our reducer
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />
                <button onClick={e => history.push("/payment")} className='sub_button'>Payment getway </button>

            </div>

        </Container>
    );
}

export default Subtotal;