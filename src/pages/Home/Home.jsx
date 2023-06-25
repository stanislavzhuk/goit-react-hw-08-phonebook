import React from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <h2 className={css.text}>
        Hello, please{' '}
        <>
          <Link className={css.link} to="/login">login</Link> or <Link className={css.link} to="/register">register</Link>
        </>
        {' '}new phonebook list
      </h2>
    </div>
  );
};

export default Home;