import css from './customButton.module.css';
import classNames from 'classnames';

import spritePath from '../../images/icons/sprite.svg';

const CustomButton = ({ label, type, icon, onClick }) => {
  const buttonClass = classNames(css.customButton, {
    [css[type]]: type,
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
      <svg className={css.icon}>
        <use className={css.icon} href={`${spritePath}#${icon}`} />
      </svg>
    </button>
  );
};

export default CustomButton;
