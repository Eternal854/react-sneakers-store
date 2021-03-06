import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function Header(props) {
  const { totalPrice } = useCart;

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="">
        <div className="d-flex align-center">
          <img className="mr-10" width={40} heigth={40} src="img/logo.png" alt="Logo" />
          <div>
            <h3 className="text-uppercase">Sneakers Store</h3>
            <p className="opacity-5">Лучший магазин кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.openCart} className="mr-30 cu-p">
          <img className="mr-10" width={18} heigth={18} src="img/cart.svg" alt="Cart" />
          <span>
            <span>{totalPrice} руб.</span>
          </span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="favorites">
            <img width={18} heigth={18} src="img/heart.svg" alt="Favorites" />
          </Link>
        </li>
        <li>
          <Link to="orders">
            <img width={18} heigth={18} src="img/user.svg" alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
