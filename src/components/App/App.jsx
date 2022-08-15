import { ContactForm, ContactList, Filter } from 'components';

import {
  AppContainer,
  AppTitle,
  AppSubTitle,
  ContactsWrapper,
} from './App.styled';

export const App = () => {
  return (
    <AppContainer>
      <AppTitle>Phonebook</AppTitle>
      <ContactForm />

      <AppSubTitle>Contacts</AppSubTitle>
      <ContactsWrapper>
        <Filter />
        <ContactList />
      </ContactsWrapper>
    </AppContainer>
  );
};
