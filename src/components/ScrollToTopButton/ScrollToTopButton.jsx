import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import spritePath from '../../images/icons/sprite.svg';
import css from './scrollToTopButton.module.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 1000);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={css.scrollButton}
          onClick={scrollToTop}
          initial={{ opacity: 0, right: -100 }}
          animate={{ opacity: 1, right: 20 }}
          exit={{ opacity: 0, right: -100 }}
          transition={{ duration: 0.3 }}
        >
          <svg className={css.icon}>
            <use className={css.icon} href={`${spritePath}#up`} />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
