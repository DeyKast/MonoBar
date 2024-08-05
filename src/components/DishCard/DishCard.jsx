import css from './dishCard.module.css';

import defaultImage from '../../images/logo/logo.png';
import CustomButton from 'components/CustomButton/CustomButton';

const DishCard = ({ dishesData }) => {
  console.log(dishesData);
  return (
    <>
      {dishesData.map(dish => (
        <div key={dish.id} className={css.dishCard}>
          <img
            src={defaultImage}
            alt="dish_image"
            className={css.dishCardImage}
          />
          <div className={css.dishCardInfoWrapper}>
            <div className={css.dishNameWrapper}>
              <p className={css.dishName}>{dish.name}</p>
              <p className={css.dishAmount}>{dish.amount}</p>
            </div>
            <div>
              <p className={css.dishIngredients}>
                {dish.ingredients.join(' | ')}
              </p>
            </div>
            <div className={css.dishPriceWrapper}>
              <p className={css.dishPrice}>{dish.price}</p>
              <CustomButton label="Обрати" type="smallAdaptiveChose" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DishCard;
