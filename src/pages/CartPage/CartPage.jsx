import { useState, useEffect } from 'react';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

import css from './cartPage.module.css';

import DefaultPage from 'components/DefaultPage/DefaultPage';
import menuData from '../../service/menu.json';

import spritePath from '../../images/icons/sprite.svg';
import defaultImage from '../../images/defaultDishImage.jpg';
import CartButton from 'components/CartButton/CartButton';

const CartPage = () => {
  const [cart, setCart] = useState({});
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart')) || {};
    setCart(storedCart);

    const allItems = Object.values(menuData).flatMap(categories =>
      categories.flatMap(category => category.items)
    );

    const selectedDishes = Object.keys(storedCart)
      .map(id => {
        const dish = allItems.find(item => item.id === id);
        return dish ? { ...dish, quantity: storedCart[id] } : null;
      })
      .filter(Boolean);

    setDishes(selectedDishes);
  }, []);

  const confirmAndRemove = id => {
    Confirm.show(
      'Підтвердження',
      'Ви впевнені, що хочете видалити цю позицію з корзини?',
      'Так',
      'Скасувати',
      () => removeFromCart(id)
    );
  };

  const updateCart = (id, newQuantity) => {
    if (newQuantity < 1) {
      confirmAndRemove(id);
      return;
    }

    const updatedCart = { ...cart, [id]: newQuantity };
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    setDishes(prev =>
      prev.map(d => (d.id === id ? { ...d, quantity: newQuantity } : d))
    );
  };

  const removeFromCart = id => {
    const updatedCart = { ...cart };
    delete updatedCart[id];
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    setDishes(prev => prev.filter(d => d.id !== id));
  };

  const getImage = imageName => {
    try {
      return require(`../../images/photos/${imageName}.webp`);
    } catch (e) {
      return defaultImage;
    }
  };

  const totalPrice = dishes.reduce((acc, dish) => {
    const priceStr = dish.price.split(' ')[0].split('/')[0];
    const numericPrice = parseFloat(priceStr);
    return acc + (isNaN(numericPrice) ? 0 : numericPrice * dish.quantity);
  }, 0);

  return (
    <DefaultPage title="Корзина">
      <div className={css.cartContainer}>
        {dishes.length === 0 ? (
          <p className={css.emptyCart}>Корзина пуста</p>
        ) : (
          <>
            {dishes.map(dish => (
              <div key={dish.id} className={css.cartItem}>
                <img
                  src={getImage(dish.imageName)}
                  alt={dish.name}
                  className={css.image}
                />
                <div className={css.details}>
                  <h3>{dish.name}</h3>
                  <p>{dish.amount}</p>
                  <p>{dish.price}</p>
                  <div className={css.controls}>
                    <button
                      onClick={() => updateCart(dish.id, dish.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{dish.quantity}</span>
                    <button
                      onClick={() => updateCart(dish.id, dish.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className={css.deleteBtn}
                      onClick={() => confirmAndRemove(dish.id)}
                    >
                      <svg className={css.icon}>
                        <use
                          className={css.icon}
                          href={`${spritePath}#cancel`}
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className={css.total}>
              <h2>Всього: {totalPrice} грн</h2>
            </div>
          </>
        )}
      </div>

      <CartButton type="undo" />
    </DefaultPage>
  );
};

export default CartPage;
