import {
  ContactItem,
  ContactTextWrapper,
  ContactName,
  Button,
} from './ContactListItem.styled';

import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import PropTypes from 'prop-types';

export const ContactListItem = ({ name, phone, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ContactItem>
      <ContactTextWrapper>
        <ContactName>{name}:</ContactName> <span>{phone}</span>
      </ContactTextWrapper>
      <Button
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </Button>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
