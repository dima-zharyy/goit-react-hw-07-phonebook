import { useState, useId } from 'react';
import {
  Form,
  InnerFormContainer,
  FormLabel,
  FormInput,
  Button,
} from './ContactForm.styled';

import { isContactInList } from 'helpers/isContactInList';
import { nanoid } from 'nanoid';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const inputNameId = useId();
  const inputNumberId = useId();
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleSubmit = event => {
    event.preventDefault();

    if (isContactInList(contacts, name)) {
      alert(`${name} is already in contacts.`);
      setName('');
      setNumber('');
      return;
    }

    const id = nanoid(5);
    const newContact = { id, name, number };

    addContact(newContact);

    setName('');
    setNumber('');
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InnerFormContainer>
        <FormLabel htmlFor={inputNameId}>Name</FormLabel>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer"
          required
          id={inputNameId}
          onChange={handleInputChange}
          value={name}
          autoComplete="off"
        />
      </InnerFormContainer>
      <InnerFormContainer>
        <FormLabel htmlFor={inputNumberId}>Number</FormLabel>
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={inputNumberId}
          onChange={handleInputChange}
          value={number}
          autoComplete="off"
        />
      </InnerFormContainer>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add contact'}
      </Button>
    </Form>
  );
};
