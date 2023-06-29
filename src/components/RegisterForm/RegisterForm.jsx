import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userRegistration } from 'redux/auth/authThunk';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      userRegistration({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <Typography variant="h2" align="center" sx={{ fontSize: '35px', fontWeight: `bold` }}>
        Sign up
      </Typography>
      <Box
        component="form"
        sx={{ mt: 3 }}
        onSubmit={handleSubmit}
        autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="name"
              label="Name"
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
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 3, padding: '10px 20px' }}>Sign up</Button>
      </Box>
      <div style={{ textAlign: 'center' }}>
        <p>
          Already have an account?
          <Link to="/login"> Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;