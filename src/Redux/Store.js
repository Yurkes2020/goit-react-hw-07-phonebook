import { configureStore, createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './FetchContact';

const sliceContact = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   addContact(state, action) {
  //     state.contacts.unshift(action.payload);
  //   },
  //   deleteContact(state, action) {
  //     state.contacts = state.contacts.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  // },
  extraReducers: builder => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.error = 'жопа';
    });
  },
  // extraReducers: {
  //   [fetchContacts.pending]: state => {
  //     state.isLoading = true;
  //   },
  //   [fetchContacts.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contacts = action.payload;
  //   },
  //   [fetchContacts.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
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

export const { addContact, deleteContact } = sliceContact.actions;
export const { filter } = sliceFilter.actions;

export const store = configureStore({
  reducer: {
    contacts: sliceContact.reducer,
    filter: sliceFilter.reducer,
  },
});
