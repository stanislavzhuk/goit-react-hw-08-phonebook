import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import css from './Home.module.css';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      {!isLoggedIn ? (<h2 className={css.text}>
        Hello, please{' '}
        <>
          <Link className={css.link} to="/login">login</Link> or <Link className={css.link} to="/register">register</Link>
        </>
        {' '}new phonebook list
      </h2>
      ) : (<h2 className={css.text}>
        You can view <Link className={css.link} to="/contacts"> your contacts</Link>
      </h2>)}
    </div>
  );
};

export default Home;