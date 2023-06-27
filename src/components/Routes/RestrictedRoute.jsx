import { Navigate } from 'react-router-dom';
const { useSelector } = require('react-redux');
const { selectIsLoggedIn } = require('redux/auth/selectors');

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};