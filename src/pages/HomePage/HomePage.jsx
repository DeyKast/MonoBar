import { useNavigate, Link } from 'react-router-dom';

import CustomButton from 'components/CustomButton/CustomButton';

import css from './homePage.module.css';

import logo from '../../images/logo/logo.png';
import logoSliced from '../../images/logo/logo_sliced.png';
import spritePath from '../../images/icons/sprite.svg';

const HomePage = () => {
  const navigate = useNavigate();

  const handleFeedback = () => {
    window.open(
      'https://www.google.com/maps/place/MONO+BAR/@48.9211058,24.7121392,19z/data=!4m8!3m7!1s0x4730c16f555a6265:0x2c0bfb535bb2bc7a!8m2!3d48.9211578!4d24.7124262!9m1!1b1!16s%2Fg%2F11k36lws93?entry=ttu',
      '_blank'
    );
  };

  return (
    <div className={`container ${css.containerHome}`}>
      <div className={`section ${css.sectionHome}`}>
        <Link to="/" className={css.logoLink}>
          <img src={logo} alt="Logo" />
        </Link>

        <div className={css.infoWrapper}>
          <p className={css.timeText}>12:00 - 23:00</p>
          <a
            href="tel:+380954079707"
            className={`${css.socialLink} ${css.phoneText}`}
          >
            +38 095 40 79 707
          </a>
        </div>

        <ul className={css.buttonsList}>
          <li>
            <CustomButton
              label="Меню"
              type="wide"
              icon="menu"
              onClick={() => navigate('/menu')}
            />
          </li>
          <li>
            <CustomButton
              label="Зарезервувати"
              type="wide"
              icon="table"
              onClick={() => {}}
            />
          </li>
          <li>
            <CustomButton
              label="Залишити відгук"
              type="wide"
              icon="feedback"
              onClick={() => {
                handleFeedback();
              }}
            />
          </li>
        </ul>

        <div className={css.socialLinksWrapper}>
          <a
            href="https://www.instagram.com/mono.bar/"
            target="_blank"
            rel="noreferrer"
            className={css.socialLink}
          >
            @mono.bar
            <svg className={css.icon}>
              <use className={css.icon} href={`${spritePath}#instagram`} />
            </svg>
          </a>
          <a
            href="https://maps.app.goo.gl/KRZir5gksGp4uyjo8"
            target="_blank"
            rel="noreferrer"
            className={css.socialLink}
          >
            Вул. Леся Курбаса 4
            <svg className={css.icon}>
              <use className={css.icon} href={`${spritePath}#location`} />
            </svg>
          </a>
        </div>
      </div>
      <img
        src={logoSliced}
        alt="logoSliced"
        className={`${css.backgroundLogo} ${css.backgroundRightLogo}`}
      />
      <img
        src={logoSliced}
        alt="logoSliced"
        className={`${css.backgroundLogo} ${css.backgroundLeftLogo}`}
      />
    </div>
  );
};

export default HomePage;
