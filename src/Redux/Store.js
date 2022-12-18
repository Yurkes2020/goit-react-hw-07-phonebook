import { configureStore, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './FetchContact';

const sliceContact = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = null;
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = null;
    });
  },
});

const sliceFilter = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filter } = sliceFilter.actions;

export const store = configureStore({
  reducer: {
    contacts: sliceContact.reducer,
    filter: sliceFilter.reducer,
  },
});
