import css from './customButton.module.css';
import classNames from 'classnames';

import spritePath from '../../images/icons/sprite.svg';

const CustomButton = ({
  label,
  type,
  icon,
  isActive,
  onClick,
}) => {
  const buttonClass = classNames(css.customButton, {
    [css[type]]: type,
    [css.isActive]: isActive,
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
      {icon && (
        <svg className={css.icon}>
          <use href={`${spritePath}#${icon}`} />
        </svg>
      )}
    </button>
  );
};

export default CustomButton;
