import React from 'react'
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <div>
      <h2>Sign up</h2>
      <form autoComplete="off">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          required
        />
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
          placeholder="Create a password"
          required
        />
        <button type="submit">Sign up</button>
      </form>
      <div>
        <p>
          Already have an account?
          <Link to="/login"> Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;