import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogIn } from 'redux/auth/authThunk';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      userLogIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <Typography variant="h2" align="center" sx={{ fontSize: '35px', fontWeight: `bold` }}>
        Log in
      </Typography>
      <Box
        component="form"
        sx={{ mt: 3 }}
        onSubmit={handleSubmit}
        autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="email"
              name="email"
              label="Email"
              required
              fullWidth
              sx={{
                '& label': {
                  color: '#fff',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#fff',
                },
                '& .MuiInputBase-input': {
                  color: '#fff',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              name="password"
              label="Password"
              required
              fullWidth
              sx={{
                '& label': {
                  color: '#fff',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#fff',
                },
                '& .MuiInputBase-input': {
                  color: '#fff',
                },
              }}
            />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 3, padding: '10px 20px' }}>Log in</Button>
      </Box>
      <div style={{ textAlign: 'center' }}>
        <p>
          Don't have an account?
          <Link to="/register"> Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;