import { Navigate } from 'react-router-dom';

const { useSelector } = require('react-redux');
const { selectIsLoggedIn, selectIsRefreshing } = require('redux/auth/selectors');

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};