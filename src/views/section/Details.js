import React, { Component } from 'react'
import { DataContext } from '../component/Context';
import { NavLink } from 'react-router-dom'
import Colors from './Color';
import './detail.scss'
import styled from 'styled-components';
import { Row } from 'reactstrap';




export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () => {
        if (this.props.match.params.id) {
            const res = this.context.products;
            const data = res.filter(item => {
                return item._id === this.props.match.params.id
            })
            this.setState({ product: data })
        }
    };

    componentDidMount() {
        this.getProduct();
    }



    render() {
        const { product } = this.state;
        const { addCart } = this.context;
        const Button = styled.button`
        background-color: white;
        color: black;
        font-size: 20px;
        padding: 10px 60px;
        border-radius: 5px;
        margin: 10px 0px;
        cursor: pointer;
      `;
        return (
            <>
                <Row>
                    <div className="btn-back">
                        <Button>
                            <NavLink to="/product" className="cart" >
                                Back to product
                            </NavLink>
                        </Button>

                    </div>
                    <div>
                        {
                            product.map(item => (
                                <div className="details" key={item._id}>
                                    <img src={item.src} alt="" />
                                    <div className="box">
                                        <div className="row">
                                            <h2>{item.title}</h2>
                                            <span>${item.price}</span>
                                        </div>
                                        <Colors colors={item.colors} />
                                        <p>{item.description}</p>
                                        <p>{item.content}</p>
                                        <NavLink to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                            Add to cart
                                        </NavLink>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </Row>

            </>
        )
    }
}

export default Details