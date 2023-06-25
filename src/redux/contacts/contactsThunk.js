import { createAsyncThunk } from "@reduxjs/toolkit";
// import { addContact, deleteContact, fetchContacts } from "services/contactsAPI";
import { addContact, deleteContact, fetchContacts, patchContact } from "services/phonebookAPI";

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchContacts();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await addContact(contact);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteContact(id);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const patchContactThunk = createAsyncThunk(
  'contacts/patchContact',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const data = await patchContact(id, { name, number });
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);