import css from './dishCard.module.css';

import defaultImage from '../../images/defaultDishImage.jpg';
import CustomButton from 'components/CustomButton/CustomButton';

const DishCard = ({ dishesData }) => {
  const getImage = imageName => {
    try {
      return require(`../../images/photos/${imageName}.png`);
    } catch (error) {
      console.log(`Image not found: ${imageName}, using default image.`);
      return defaultImage;
    }
  };

  return (
    <>
      {dishesData.map(dish => (
        <div key={dish.id} className={css.dishCard}>
          <div className={css.imageWrapper}>
            <img
              src={getImage(dish.imageName)}
              alt={dish.name}
              className={css.dishCardImage}
            />
          </div>
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
