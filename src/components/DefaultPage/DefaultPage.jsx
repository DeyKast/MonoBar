import React from 'react';
import css from './defaultPage.module.css';

const DefaultPage = ({ title, children }) => {
  return (
    <div className={css.container}>
      <div className={`section ${css.defaultMenu}`}>
        <h1 className={css.defaultPageTitle}>{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default DefaultPage;
