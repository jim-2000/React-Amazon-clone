import './App.css';
import Header from './Component/Header/Header.jsx'
import Footer from './Component/footer/footer.jsx'
import Home from './Component/HOME/Home.jsx'
import Checkout from './Component/Checkout/Checkout.jsx'
import Payment from './Component/Payment/Payment.jsx';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Log from './Component/Login/log';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';

import { UseStatevalue } from './Component/StateProvider/StateProvider';
import Order from './Component/Order/Order';



//
//
//
function App() {
  const promise = loadStripe('pk_test_51HyfPxG2v0f9y0mmO4iCyDOkmOvviPOgV3N5FhKZKrIDJjMDDKmGjTUtR2SEPN0B20zYIIcSizMlTaWRAL0JmaXm00ijtjVNFU')


  const [{ }, dispatch] = UseStatevalue()


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('USER IS>>>>>>>>', authUser)
      if (authUser) {
        // the user is just logged in // or loged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //user is not loged in 
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])


  return (
    <Router>
      <div className="App">
        <Container className='themed-container' fluid={true}>
          <Header />

          <Switch>
            <Route path='/payment'>
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>

            <Route path='/order'>
              <Order />
            </Route>

            <Route path='/checkout'>
              <Checkout />
            </Route>
            <Route path='/login'>

              <Log />

            </Route>
            <Route path='/'>

              <Home />
            </Route>
          </Switch>
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
