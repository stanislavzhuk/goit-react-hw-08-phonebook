import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import css from './Layout.module.css'

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <ul className={css.navbar}>
          <li>
            <NavLink to='/' className={css.navlink}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/contacts' className={css.navlink}>Contacts</NavLink>
          </li>
          <li>
            <NavLink to='/register' className={css.navlink}>Sign up</NavLink>
          </li>
          <li>
            <NavLink to='/login' className={css.navlink}>Log in</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;