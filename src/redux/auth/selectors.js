import { createSelector } from '@reduxjs/toolkit';

// Auth selectors
export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectError = state => state.auth.error;
export const selectLoading = state => state.auth.loading;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;

// Contacts selectors
export const selectContacts = state => state.contacts.items;
export const selectContactsLoading = state => state.contacts.loading;
export const selectIsOpen = state => state.contacts.isOpen;
export const selectIsClose = state => state.contacts.isClose;
export const selectIsAccept = state => state.contacts.isAccept;
export const selectModalContactId = state => state.contacts.modalId;
export const selectOpenEditor = state => state.contacts.isOpenEditor;
export const selectEditorContactId = state => state.contacts.editorId;

// Filters selectors
export const selectNameFilter = state => state.filters.name;

// Memo contacts list
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
        contact.number.includes(filter.trim())
      );
    });
  }
);
