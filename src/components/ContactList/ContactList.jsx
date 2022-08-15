import { ContactListItem } from 'components';
import { useSelector } from 'react-redux/';
import { getFilter, getItems } from 'redux/contacts/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return contacts.length > 0 ? (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} name={name} number={number} id={id} />;
      })}
    </ul>
  ) : (
    <p>Your contact book is empty</p>
  );
};
