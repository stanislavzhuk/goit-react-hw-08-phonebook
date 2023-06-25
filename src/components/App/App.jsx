import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  )
};

export default App;