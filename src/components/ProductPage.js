import React, { Component } from 'react'
import functions from '../utilities/functions'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'

class ProductPage extends Component {
    constructor(){
        super()

        this.state = {
            product: {}
        }

        this.getProduct = this.getProduct.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    componentDidMount(){
        this.getProduct()
        functions.generateId()         
    }

    getProduct(){
        axios.get(`/api/products/${this.props.match.params.product_id}`).then(response => {
            this.setState({product: response.data[0]})
         })
    }

    addToCart(){
        const body = {
            product_id: this.state.product.id
        }

        axios.post('/api/cart', body).then(response => {
            console.log('item added to cart')
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="product-page-body">
                    <img src={this.state.product.image_url} alt={this.state.product.name} />
                    <div className="product-page-info">
                        <div className="product-page-name">{this.state.product.name}</div>
                        <div className="product-page-price">${this.state.product.price}</div>
                        <div className="product-page-description">{this.state.product.description}</div>
                        <button onClick={() => this.addToCart()} >Add To Cart</button>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ProductPage;