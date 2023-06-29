import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogOut } from 'redux/auth/authThunk';
import { selectUser } from 'redux/auth/selectors';
import { Button, Container, Text } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(userLogOut())
    navigate('/', { replace: true })
  }

  return (
    <Container>
      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={handleLogOut}>Log out</Button>
    </Container>
  );
};

export default UserMenu;