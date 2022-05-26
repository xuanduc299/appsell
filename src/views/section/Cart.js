import React, { Component } from 'react'
import { DataContext } from '../component/Context';
import { NavLink } from 'react-router-dom'
import Colors from './Color';
import './detail.scss'
import './cart.scss'


export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount() {
        this.context.getTotal();
    }

    render() {
        const { cart, increase, reduction, removeProduct, total } = this.context;
        if (cart.length === 0) {
            return <div className="total-01">
                <NavLink to="/payment">Payment</NavLink>
                <h3>Total: ${total}</h3>
            </div>
        } else {
            return (
                <>
                    <div className="bd-cart">
                        {
                            cart.map(item => (
                                <div className="details cart" key={item._id}>
                                    <img src={item.src} alt="" />
                                    <div className="box">
                                        <div className="row">
                                            <h2>{item.title}</h2>
                                            <span>${item.price * item.count}</span>
                                        </div>
                                        <Colors colors={item.colors} />
                                        <p>{item.description}</p>
                                        <p>{item.content}</p>
                                        <div className="amount">
                                            <button className="count" onClick={() => reduction(item._id)}> - </button>
                                            <span>{item.count}</span>
                                            <button className="count" onClick={() => increase(item._id)}> + </button>
                                        </div>
                                    </div>
                                    <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                                </div>
                            ))
                        }
                        <div className="total">
                            <NavLink to="/payment">Payment</NavLink>
                            <h3>Total: ${total}</h3>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default Cart