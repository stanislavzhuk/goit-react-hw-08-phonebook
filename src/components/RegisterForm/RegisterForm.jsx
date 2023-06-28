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
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
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