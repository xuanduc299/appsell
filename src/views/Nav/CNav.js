import React from 'react';
import './Nav.scss';
import Logo from '../../assets/images/logo.png';
// import CartIcon from '../../assets/images/shopping-cart-solid.svg'
// import { DataContext } from '../component/Context';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElement';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <img className="logo" src={Logo} alt='' />
                </NavLink>
                <Bars />
                <NavMenu>
                    {/* <NavLink to='/about' activeStyle>
                        about
                    </NavLink> */}
                    <NavLink to='/services' activeStyle>
                        Services
                    </NavLink>
                    <NavLink to='/contact-us' activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to='/product' activeStyle>
                        Products
                    </NavLink>

                    {/* <NavLink to='/login' activeStyle>
                        Login
                    </NavLink> */}
                    <NavLink to="/cart">
                        {/* <img src={CartIcon} alt="" width="20" /> */}
                        Cart
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};
// const { cart } = this.context;

export default Navbar;