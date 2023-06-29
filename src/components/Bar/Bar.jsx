import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { HeaderBar } from './Bar.styled';

const Bar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderBar>
      <Navigation />
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </HeaderBar>
  );
};

export default Bar;