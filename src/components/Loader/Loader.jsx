import { Rings } from 'react-loader-spinner';
import css from './loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <Rings
        visible={true}
        height="150"
        width="150"
        color="var(--accent-color)"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
