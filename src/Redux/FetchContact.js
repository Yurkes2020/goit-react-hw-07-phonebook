import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contact/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await axios.get(
        'https://6397c6fc77359127a03f7a55.mockapi.io/contact'
      );
      return responce.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const responce = await axios.post(
        'https://6397c6fc77359127a03f7a55.mockapi.io/contact',
        contact
      );
      return responce.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const responce = await axios.delete(
        `https://6397c6fc77359127a03f7a55.mockapi.io/contact/${contactId}`
      );
      return responce.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
