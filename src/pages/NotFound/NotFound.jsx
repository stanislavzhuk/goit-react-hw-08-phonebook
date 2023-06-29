import React from 'react';
import { Container, Error, VisuallyHidden, StyledLink } from './NotFound.styled';

const NotFound = () => {
  return (
    <Container>
      <p>Oops!</p>
      <VisuallyHidden>Page not found</VisuallyHidden>
      <Error>404</Error>
      <p>It looks like you're lost</p>
      <StyledLink to={`/`}>Return to home page</StyledLink>
    </Container>
  );
};

export default NotFound;