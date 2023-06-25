import axios from 'axios';

const phonebookAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const fetchContacts = async () => {
  const { data } = await phonebookAPI.get('/contacts');
  // console.log('Received contacts:', data);
  return data;
};

export const addContact = async contact => {
  const { data } = await phonebookAPI.post('/contacts', contact);
  // console.log('Contact added:', data);
  return data;
};

export const deleteContact = async id => {
  // console.log('Contact ID to delete:', id);
  const { data } = await phonebookAPI.delete(`/contacts/${id}`);
  // console.log('Contact deleted:', data);
  return data;
};

export const patchContact = async id => {
  // console.log('Contact ID to patch:', id);
  const { data } = await phonebookAPI.patch(`/contacts/${id}`);
  // console.log('Contact patched:', data);
  return data;
};