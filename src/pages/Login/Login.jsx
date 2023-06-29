import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import { Box, Container } from '@mui/material';

const Login = () => {
  return (
    <Container
      component="div"
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 6,
          padding: 4,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '10px',
          boxShadow: '0 5px 10px rgba(0,0,0,.3)',
          webkitBoxShadow: '0 5px 10px rgba(0,0,0,.3)',
          mozBoxShadow: '0 5px 10px rgba(0,0,0,.3)',
        }}
      >
        <LoginForm />
      </Box>
    </Container>
  );
};

export default Login;