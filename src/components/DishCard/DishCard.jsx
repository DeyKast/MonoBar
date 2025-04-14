import css from './dishCard.module.css';

import defaultImage from '../../images/defaultDishImage.jpg';
import CustomButton from 'components/CustomButton/CustomButton';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DishCard = ({ dishesData }) => {
  const getImage = imageName => {
    try {
      return require(`../../images/photos/${imageName}.webp`);
    } catch (error) {
      console.log(`Image not found: ${imageName}, using default image.`);
      return defaultImage;
    }
  };

  const handleAddDish = (id, dishName) => {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || {};

    if (cart[id]) {
      cart[id] += 1;
    } else {
      cart[id] = 1;
    }

    sessionStorage.setItem('cart', JSON.stringify(cart));

    Notify.success(`${dishName} додано в корзину !`);

    console.log(cart);
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
              <CustomButton
                label="Обрати"
                type="smallAdaptiveChose"
                onClick={() => handleAddDish(dish.id, dish.name)}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DishCard;
