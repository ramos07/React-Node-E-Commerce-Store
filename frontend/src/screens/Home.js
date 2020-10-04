import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
// import products from '../products'
import axios from 'axios'

const Home = () => {
    const [products, setProducts] = useState([])

    // Whatever is put inside the useEffect function will run as soon as the component loads.
    useEffect(() => {
        const fetchProducts = async () => {
            // De structure and get the data response object
            const { data } = await axios.get('/api/products')
            setProducts(data)
        }
        fetchProducts()
    }, [])

    return (
        <>
            <h1>Latest products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Home
