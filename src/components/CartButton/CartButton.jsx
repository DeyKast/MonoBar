import { useNavigate } from 'react-router-dom';
import css from './cartButton.module.css';

import spritePath from '../../images/icons/sprite.svg';

const CartButton = () => {
  const navigate = useNavigate();

  return (
    <div className={css.cartButtonContainer}>
      <button className={css.cartButton} onClick={() => navigate('/cart')}>
        <svg className={css.iconWrapper}>
          <use className={css.icon} href={`${spritePath}#cart`} />
        </svg>
      </button>
    </div>
  );
};

export default CartButton;
