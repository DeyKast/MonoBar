import React from 'react';
import css from './menuPage.module.css';

import CustomButton from 'components/CustomButton/CustomButton';
import DefaultPage from 'components/DefaultPage/DefaultPage';

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
    </DefaultPage>
  );
};

export default MenuPage;
