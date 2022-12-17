import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://https://6397c6fc77359127a03f7a55.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contact/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const responce = axios.get(
        'https://6397c6fc77359127a03f7a55.mockapi.io/contact'
      );
      return responce.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
