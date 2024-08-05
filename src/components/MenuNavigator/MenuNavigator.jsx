import CustomButton from 'components/CustomButton/CustomButton';
import css from './menuNavigator.module.css';

const MenuNavigator = ({ data }) => {
  return (
    <div className={css.menuNavigatorWrapper}>
      {data.map(category => (
        <CustomButton
          label={category.category}
          type="smallAdaptive"
          key={category.categoryID}
        ></CustomButton>
      ))}
    </div>
  );
};

export default MenuNavigator;
