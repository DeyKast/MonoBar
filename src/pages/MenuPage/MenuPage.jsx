import { useState } from 'react';
import { motion } from 'framer-motion';
import DefaultPage from 'components/DefaultPage/DefaultPage';
import menuData from '../../service/menu.json';
import CustomButton from 'components/CustomButton/CustomButton';
import MenuList from 'components/MenuList/MenuList';

import css from './menuPage.module.css';

const MenuPage = () => {
  const [activeMenu, setActiveMenu] = useState('cookery');

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

      <div className={css.menuListsWrapper}>
        <motion.div
          key={activeMenu}
          className={css.menuSlider}
          initial={{ opacity: 0.1, x: activeMenu === 'bar' ? 300 : -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.1, x: activeMenu === 'bar' ? -300 : 300 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          {activeMenu === 'cookery' && <MenuList data={menuData.cookery} />}
          {activeMenu === 'bar' && <MenuList data={menuData.bar} />}
        </motion.div>
      </div>
    </DefaultPage>
  );
};

export default MenuPage;
