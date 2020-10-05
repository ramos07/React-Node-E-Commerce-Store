import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
// Components
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
// Redux
import { listProducts } from '../actions/productActions'

const Home = () => {
    const dispatch = useDispatch()
    // Grab the data from the state
    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList

    // Whatever is put inside the useEffect function will run as soon as the component loads.
    useEffect(() => {
        // Dispatch the list products action and fill our state
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <h1>Latest products</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    )
}

export default Home
