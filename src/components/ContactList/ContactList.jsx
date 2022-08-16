import { ContactListItem } from 'components';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { getFilter } from 'redux/filter/filterSlice';

export const ContactList = () => {
  const { data: contacts, isLoading } = useGetContactsQuery();
  const filter = useSelector(getFilter);
  const filteredContacts = !isLoading
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : null;

  if (isLoading) {
    return <Loader />;
  }

  return contacts.length > 0 ? (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => {
        return <ContactListItem key={id} name={name} phone={phone} id={id} />;
      })}
    </ul>
  ) : (
    <p>Your contact book is empty</p>
  );
};
