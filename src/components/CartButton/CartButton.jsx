import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import css from './cartButton.module.css';
import spritePath from '../../images/icons/sprite.svg';

const CartButton = ({ type, blink }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, right: -100 }}
      animate={{ opacity: 1, right: 20 }}
      exit={{ opacity: 0, right: -100 }}
      transition={{ duration: 0.3 }}
      className={`${css.cartButtonContainer} ${
        type === 'undo' ? css.undoContainerStyle : ''
      }`}
    >
      <motion.button
        className={css.cartButton}
        onClick={() => navigate(type === 'cart' ? '/cart' : '/menu')}
        animate={
          blink
            ? {
                backgroundColor: ['#966d5b', ' #500805', ' #966d5b'],
                scale: [1, 1.2, 1],
              }
            : {}
        }
        transition={blink ? { duration: 0.3, ease: 'easeInOut' } : {}}
      >
        <svg className={css.iconWrapper}>
          <use
            className={css.icon}
            href={`${spritePath}#${type === 'cart' ? 'cart' : 'undo'}`}
          />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default CartButton;
