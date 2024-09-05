import MenuNavigator from 'components/MenuNavigator/MenuNavigator';
import css from './menuList.module.css';
import DishCard from 'components/DishCard/DishCard';

const MenuList = ({ data }) => {
  return (
    <div className={css.menuBlockWrapper}>
      <div className={css.menuListWrapper}>
        <MenuNavigator data={data} />
        {data.map(category => (
          <div key={category.categoryID} className={css.menuListCardsWrapper}>
            <p className={css.categoryName}>{category.category}</p>
            <DishCard dishesData={category.items} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
