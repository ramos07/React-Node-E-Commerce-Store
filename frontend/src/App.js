import React from 'react'
import { Container } from 'react-bootstrap'
// Routing
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Screens
import HomeScreen from './screens/Home'
import ProductScreen from './screens/Product'
import CartScreen from './screens/Cart'
import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'
import ProfileScreen from './screens/Profile'
import ShippingScreen from './screens/Shipping'
import PaymentScreen from './screens/Payment'
import PlaceOrderScreen from './screens/PlaceOrder'
import OrderScreen from './screens/Order'

// History
import history from './utils/history'

const App = () => {
    return (
        <Router history={history}>
            <Header />
            <main className='py-3'>
                <Container>
                    <Route path='/order/:id' component={OrderScreen} />
                    <Route path='/place-order' component={PlaceOrderScreen} />
                    <Route path='/payment' component={PaymentScreen} />
                    <Route path='/shipping' component={ShippingScreen} />
                    <Route path='/register' component={RegisterScreen} />
                    <Route path='/profile' component={ProfileScreen} />
                    <Route path='/login' component={LoginScreen} />
                    <Route path='/product/:id' component={ProductScreen} />
                    <Route path='/cart/:id?' component={CartScreen} />
                    <Route path='/' component={HomeScreen} exact />
                </Container>
            </main>
            <Footer />
        </Router>
    )
}

export default App
