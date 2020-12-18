import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Orders from './Orders'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HZrQqDtpn808lrYUmlrKobu0GZEVPV6QQ6mJnDnUZ3o7I6DWGGEMBtwMtbylBY5Z2OoNwGPnasIkTVRd8K8V4vU00Jc6VtgTt');
function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is ', authUser);
      if (authUser) {
        //user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser

        }
        )
      } else {
        // user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        }
        )
      }
    })
  }, [])
  return (

    <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route path='/orders'>
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Elements stripe={promise}>
              <Payment />
            </Elements>

          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
