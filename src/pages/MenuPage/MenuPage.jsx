import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import DefaultPage from 'components/DefaultPage/DefaultPage';
import menuData from '../../service/menu.json';
import CustomButton from 'components/CustomButton/CustomButton';
import MenuList from 'components/MenuList/MenuList';
import CartButton from 'components/CartButton/CartButton';
import ScrollToTopButton from 'components/ScrollToTopButton/ScrollToTopButton';

import css from './menuPage.module.css';

const MenuPage = () => {
  const [activeMenu, setActiveMenu] = useState('cookery');
  const touchRef = useRef(null);
  const menuListRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartUpdated, setCartUpdated] = useState(false); // 🚨 Додаємо стан для анімації

  const checkCart = () => {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || {};
    const hasItems = Object.keys(cart).length > 0;
    setIsCartVisible(hasItems);

    if (hasItems) {
      setCartUpdated(true);
      setTimeout(() => setCartUpdated(false), 600); // триває анімація блиму
    }
  };

  useEffect(() => {
    checkCart();
    const onFocus = () => checkCart();
    window.addEventListener('focus', onFocus);
    return () => window.removeEventListener('focus', onFocus);
  }, []);

  const handleTouchStart = e => {
    if (e.target.closest('.menuNavigator')) {
      setIsSwiping(false);
      return;
    }
    setIsSwiping(true);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = e => {
    if (!touchStart || !isSwiping) return;
    const diff = touchStart - e.touches[0].clientX;

    if (Math.abs(diff) > 100) {
      if (diff > 0 && activeMenu === 'cookery') {
        setActiveMenu('bar');
      } else if (diff < 0 && activeMenu === 'bar') {
        setActiveMenu('cookery');
      }
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
    setIsSwiping(false);
  };

  return (
    <DefaultPage title="Меню">
      <div className={css.menuTypeButtonsWrapper}>
        {Object.entries(menuData).map(([key]) => (
          <CustomButton
            key={key}
            label={key === 'bar' ? 'Бар' : 'Кухня'}
            type="medium"
            onClick={() => setActiveMenu(key)}
            isActive={activeMenu === key}
          />
        ))}
      </div>

      <div
        className={css.menuListsWrapper}
        ref={touchRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          key={activeMenu}
          className={css.menuSlider}
          initial={{ opacity: 0.1, x: activeMenu === 'bar' ? 150 : -150 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.1, x: activeMenu === 'bar' ? -150 : 150 }}
          transition={{ type: 'spring', stiffness: 100, damping: 12 }}
        >
          {activeMenu === 'cookery' && (
            <MenuList
              ref={menuListRef}
              data={menuData.cookery}
              onAdd={checkCart}
            />
          )}
          {activeMenu === 'bar' && (
            <MenuList ref={menuListRef} data={menuData.bar} onAdd={checkCart} />
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {isCartVisible && <CartButton type="cart" blink={cartUpdated} />}
      </AnimatePresence>

      <ScrollToTopButton />
    </DefaultPage>
  );
};

export default MenuPage;
