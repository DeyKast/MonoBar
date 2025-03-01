import { useState, useEffect, useRef } from 'react';
import MenuNavigator from 'components/MenuNavigator/MenuNavigator';
import css from './menuList.module.css';
import DishCard from 'components/DishCard/DishCard';

const MenuList = ({ data }) => {
  const navigatorRef = useRef(null);
  const categoriesRef = useRef({});
  const [isSticky, setIsSticky] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navigatorRef.current) {
        const offsetTop = navigatorRef.current.offsetTop;
        setIsSticky(window.scrollY > offsetTop);
      }

      // Визначаємо, яка категорія зараз у фокусі
      let currentCategory = null;
      Object.entries(categoriesRef.current).forEach(([key, ref]) => {
        if (ref && ref.offsetTop - 200 <= window.scrollY) {
          currentCategory = key;
        }
      });

      setActiveCategory(currentCategory);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Функція для прокрутки до вибраної категорії
  const handleCategoryClick = categoryID => {
    const categoryElement = categoriesRef.current[categoryID];
    if (categoryElement) {
      const offset = navigatorRef.current.offsetHeight || 0;
      window.scrollTo({
        top: categoryElement.offsetTop - offset - 50,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={css.menuBlockWrapper}>
      <div
        ref={navigatorRef}
        className={`${css.menuNavigatorContainer} ${
          isSticky ? css.sticky : ''
        }`}
      >
        <MenuNavigator
          data={data}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />
      </div>

      <div className={css.menuListWrapper}>
        {data.map(category => (
          <div
            key={category.categoryID}
            ref={el => (categoriesRef.current[category.categoryID] = el)}
            className={css.menuListCardsWrapper}
          >
            <p className={css.categoryName}>{category.category}</p>
            <DishCard dishesData={category.items} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
