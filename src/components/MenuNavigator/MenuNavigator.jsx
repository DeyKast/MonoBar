import CustomButton from 'components/CustomButton/CustomButton';
import css from './menuNavigator.module.css';

const MenuNavigator = ({ data, activeCategory, onCategoryClick }) => {
  return (
    <div className={css.menuNavigatorWrapper}>
      {data.map(category => (
        <CustomButton
          key={category.categoryID}
          label={category.category}
          type="smallAdaptive"
          isActive={activeCategory === category.categoryID}
          onClick={() => onCategoryClick(category.categoryID)}
        />
      ))}
    </div>
  );
};

export default MenuNavigator;
