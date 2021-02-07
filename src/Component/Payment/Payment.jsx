import React, { useEffect, useState } from 'react';
import './payment.css'
import { Link, useHistory } from 'react-router-dom';
import { UseStatevalue } from '../StateProvider/StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../StateProvider/Reduicer';
import axios from 'axios';


///
////
/////////>>>>>>>>>>>>>>>>>>>>>>>>>>>
const Payment = () => {
    const [{ basket, user }, dispatch] = UseStatevalue()
    const history = useHistory()
    const stripe = useStripe();
    const elements = useElements()
    //
    const [successed, setSuccessed] = useState(false);
    const [processing, setProcessing] = useState("");


    //
    const [error, setError] = useState(null);
    const [disable, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        // generate the special stripe secret which allow us to charge a customer 

        const getclientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`

            })
            setClientSecret(response.data.clientSecret)


        }
        getclientSecret();

    }, [basket])
    //
    const handleSubmit = async (e) => {
        e.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ PaymentIntent }) => {
            // payment Internt == payment confirmation 
            setSuccessed(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })
            history.replaceState('/order')
        })
    }
    //
    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.massage : '');

    }


    ///>>>>>>>>>>>>>>>>>>>>>>>
    return (
        <div className="payment">
            <div className="payment_container">
                <h1> Checkout (<Link to="/checkout">{basket?.length} Item </Link> )</h1>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_adress">
                        <p>{user?.email}</p>
                        <p>123 React Lane </p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items and Delivery </h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>

                </div>
                <div className="payment_section">

                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/* strip magic */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment_price">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    deciamalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}

                                />
                                <button disabled={processing || disable || successed}>
                                    <span>{processing ? <p>procecing</p> :
                                        "Buy Now"}
                                    </span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Payment;