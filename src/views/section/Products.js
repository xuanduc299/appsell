import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../component/Context';
import './product.scss'

import { Row } from 'reactstrap';
import '../../views/component/about.scss';
import styled from 'styled-components';

export class Products extends Component {

    static contextType = DataContext;

    render() {

        const Button = styled.button`
        background-color: white;
        color: black;
        font-size: 20px;
        padding: 10px 60px;
        border-radius: 5px;
        margin: 10px 0px;
        cursor: pointer;
      `;

        const { products, addCart } = this.context;
        return (

            <Row>
                <div className="bd-tt-img-01">
                    <div className="bd-container">
                        <div className="bd-left-img-01">
                            <div className="bd-tt-text-img">
                                <h2 className="bd-tt-text heading-1">RUN FOR THE OCEANS</h2>
                                <p className="text-1">Đã đến lúc xỏ giày chạy bộ và Chạy bộ vì đại dương. Mỗi giây phút đều quan trọng.</p>
                            </div>
                            <Button>Tim hieu them</Button>
                        </div>
                    </div>
                </div>

                <div id="product">
                    {
                        products.map(product => (
                            <div className="card" key={product._id}>
                                <NavLink to={`/product/${product._id}`}>
                                    <img src={product.src} alt="" />
                                </NavLink>
                                <div className="content">
                                    <h3>
                                        <NavLink to={`/product/${product._id}`}>{product.title}</NavLink>
                                    </h3>
                                    <span>${product.price}</span>
                                    <p>{product.description}</p>
                                    <button onClick={() => addCart(product._id)}>Add to cart</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </Row>

        )
    }
}

export default Products