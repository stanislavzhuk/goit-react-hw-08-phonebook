import React, { lazy, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/authThunk';
import Layout from 'components/Layout/Layout';
import Loader from 'components/Loader/Loader';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';

const Home = lazy(() => import('../../pages/Home/Home'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const Register = lazy(() => import('../../pages/Register/Register'));
const Login = lazy(() => import('../../pages/Login/Login'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>
      Refreshing user... <Loader />
    </b>
  ) : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
          <Route
            path='contacts'
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />} />
          <Route
            path='register'
            element={<RestrictedRoute component={<Register />} />} />
          <Route
            path='login'
            element={<RestrictedRoute component={<Login />} />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;