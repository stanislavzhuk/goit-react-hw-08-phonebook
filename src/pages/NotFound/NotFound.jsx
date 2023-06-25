import React from 'react';
import { Link } from 'react-router-dom';
import css from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={css.container}>
      <p>Oops!</p>
      <h1 className={css.visually__hidden}>Page not found</h1>
      <h2 className={css.error}>404</h2>
      <p>It looks like you're lost</p>
      <Link className={css.button} to={`/`}>Return to home page</Link>
    </div>
  );
};

export default NotFound;