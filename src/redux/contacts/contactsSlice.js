import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },

    deleteItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const { addItem, deleteItem, changeFilter } = contactsSlice.actions;
export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
