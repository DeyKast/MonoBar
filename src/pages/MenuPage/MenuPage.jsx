import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import DefaultPage from 'components/DefaultPage/DefaultPage';
import menuData from '../../service/menu.json';
import CustomButton from 'components/CustomButton/CustomButton';
import MenuList from 'components/MenuList/MenuList';

import css from './menuPage.module.css';
import CartButton from 'components/CartButton/CartButton';

const MenuPage = () => {
  const [activeMenu, setActiveMenu] = useState('cookery');
  const touchRef = useRef(null);
  const menuListRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const handleTouchStart = e => {
    if (e.target.closest('.menuNavigator')) {
      setIsSwiping(false); // Блокуємо свайп, якщо торкання в навігаторі
      return;
    }
    setIsSwiping(true);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = e => {
    if (!touchStart || !isSwiping) return; // Не свайпаємо, якщо заблоковано

    const touchCurrent = e.touches[0].clientX;
    const diff = touchStart - touchCurrent;

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
          initial={{ opacity: 0.1, x: activeMenu === 'bar' ? 300 : -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.1, x: activeMenu === 'bar' ? -300 : 300 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        >
          {activeMenu === 'cookery' && (
            <MenuList ref={menuListRef} data={menuData.cookery} />
          )}
          {activeMenu === 'bar' && (
            <MenuList ref={menuListRef} data={menuData.bar} />
          )}
        </motion.div>
      </div>

      <CartButton />
    </DefaultPage>
  );
};

export default MenuPage;
