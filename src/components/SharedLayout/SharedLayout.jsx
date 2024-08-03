import { Link, Outlet } from 'react-router-dom';

import css from './sharedLayout.module.css';

import logo from '../../images/logo/logo.png';

const SharedLayout = () => {
  return (
    <div className={css.pageWrapper}>
      <header className={css.header}>
        <Link to="/">
          <img src={logo} alt="Logo" className={css.logoLink} />
        </Link>
      </header>

      <Outlet />
    </div>
  );
};

export default SharedLayout;
