import React, { useState, useContext } from 'react';
import './navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHIRTY</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => {setMenu('shop')}}><Link className='link' to={'/'}>Shop</Link>{menu === 'shop'? <hr/>:<></>}</li>
        <li onClick={() => {setMenu('men')}}><Link className='link' to={'/men'}>Men</Link>{menu === 'men'? <hr/>:<></>}</li>
        <li onClick={() => {setMenu('women')}}><Link className='link' to={'/women'}>Women</Link>{menu === 'women'? <hr/>:<></>}</li>
        <li onClick={() => {setMenu('kids')}}><Link className='link' to={'/kids'}>Kids</Link>{menu === 'kids'? <hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link className='link' to={'/login'}><button>Login</button></Link>
        <Link className='link' to={'/cart'}><img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
