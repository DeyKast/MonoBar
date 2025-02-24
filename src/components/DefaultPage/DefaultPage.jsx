import React from 'react';
import css from './defaultPage.module.css';

const DefaultPage = ({ title, children }) => {
  return (
    <div className={css.defaultPageContainer}>
      <div className={`section ${css.defaultMenuSection}`}>
        <h1 className={css.defaultPageTitle}>{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default DefaultPage;
