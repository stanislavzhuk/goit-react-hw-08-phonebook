import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div>
      <h2>Log in</h2>
      <form autoComplete="off">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <button type="submit">Log in</button>
      </form>
      <div>
        <p>
          Don't have an account?
          <Link to="/register"> Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;