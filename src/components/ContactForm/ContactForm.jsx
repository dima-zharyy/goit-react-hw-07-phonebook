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
  const [phone, setPhone] = useState('');
  const inputNameId = useId();
  const inputPhoneId = useId();
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleSubmit = event => {
    event.preventDefault();

    if (isContactInList(contacts, name)) {
      alert(`${name} is already in contacts.`);
      setName('');
      setPhone('');
      return;
    }

    const id = nanoid(5);
    const newContact = { id, name, phone };

    addContact(newContact);

    setName('');
    setPhone('');
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
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
        <FormLabel htmlFor={inputPhoneId}>Phone</FormLabel>
        <FormInput
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={inputPhoneId}
          onChange={handleInputChange}
          value={phone}
          autoComplete="off"
        />
      </InnerFormContainer>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add contact'}
      </Button>
    </Form>
  );
};
