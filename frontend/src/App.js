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

const App = () => {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                <Container>
                    <Route path='/' component={HomeScreen} exact />
                    <Route path='/product/:id' component={ProductScreen} />
                </Container>
            </main>
            <Footer />
        </Router>
    )
}

export default App
