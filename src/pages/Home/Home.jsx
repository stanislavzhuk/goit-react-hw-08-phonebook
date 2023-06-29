import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Container, StyledLink, Text } from './Home.styled';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      {!isLoggedIn ? (<Text>
        Hello, please{' '}
        <>
          <StyledLink to="/login">login</StyledLink> or <StyledLink to="/register">register</StyledLink>
        </>
        {' '}new phonebook list
      </Text>
      ) : (<Text>
        You can view <StyledLink to="/contacts"> your contacts</StyledLink>
      </Text>)}
    </Container>
  );
};

export default Home;