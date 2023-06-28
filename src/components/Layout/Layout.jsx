import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Bar from 'components/Bar/Bar';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Bar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;