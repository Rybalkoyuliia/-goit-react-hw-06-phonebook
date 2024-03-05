import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = { contacts: [], filter: '' };

const slice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContacts: {
      prepare: (name, number) => {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
    },

    removeContacts: (state, { payload }) => {
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };
    },
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
  selectors: {
    selectContacts: state => state.contacts,
    filteredContacts: state => state.filter,
  },
});

export const phonebookReducer = slice.reducer;
export const { addContacts, removeContacts, filterContacts } = slice.actions;
export const { selectContacts, filteredContacts } = slice.selectors;
