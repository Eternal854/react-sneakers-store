import React from 'react';
import axios from 'axios';

import Info from '../Info';
import { useCart } from '../../hooks/useCart';

import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], isOpen }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderIsComplete, setOrderIsComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const completeOrderClick = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://612a4354068adf001789baa2.mockapi.io/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setOrderIsComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://612a4354068adf001789baa2.mockapi.io/cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Не удалось создать заказ');
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.overlayVisible : styles.overlayHidden}`}>
      <div className={styles.drawer}>
        <h2 className="justify-between d-flex mb-30">
          Корзина{' '}
          <img onClick={onClose} className="removeBtn cu-p" src="img/btn-remove.svg" alt="Close" />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items flex">
              {items.map((obj) => (
                <div key={obj.title} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul className="cartTotalBlock">
                <li>
                  <span>Итого: </span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5} руб.</b>
                </li>
              </ul>

              <button disabled={isLoading} onClick={completeOrderClick} className="greenButton">
                Оформить заказ <img src="img/arrow.svg" alt="Arrow"></img>
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={orderIsComplete ? 'Заказ оформлен' : 'Корзина пуста'}
            description={
              orderIsComplete
                ? `Ваш заказ #${orderId} будет передан курьерской службе доставки`
                : 'Добавьте товар, чтобы сделать заказ'
            }
            image={orderIsComplete ? 'img/complete-order.jpg' : 'img/cart-empty.png'}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
