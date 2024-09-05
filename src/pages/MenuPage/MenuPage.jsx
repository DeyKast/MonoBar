import React from 'react';
import css from './menuPage.module.css';

import CustomButton from 'components/CustomButton/CustomButton';
import DefaultPage from 'components/DefaultPage/DefaultPage';
import MenuList from 'components/MenuList/MenuList';

import menuData from '../../service/menu.json';

const MenuPage = () => {
  return (
    <DefaultPage title="Меню">
      <ul className={css.navButtonsList}>
        <li className={css.navButtonsListItem}>
          <CustomButton label="Кухня" type="medium" onClick={() => {}} />
        </li>
        <li className={css.navButtonsListItem}>
          <CustomButton label="Бар" type="medium" onClick={() => {}} />
        </li>
      </ul>

      <div className={css.menuListWrapper}>
        <MenuList data={menuData.cookery} />
        <MenuList data={menuData.bar} />
      </div>
    </DefaultPage>
  );
};

export default MenuPage;
