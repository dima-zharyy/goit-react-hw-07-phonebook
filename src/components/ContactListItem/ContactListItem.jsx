import {
  ContactItem,
  ContactTextWrapper,
  ContactName,
  Button,
} from './ContactListItem.styled';

import { useDispatch } from 'react-redux';
import { deleteItem } from 'redux/contacts/contactsSlice';
import PropTypes from 'prop-types';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(id));
  };

  return (
    <ContactItem>
      <ContactTextWrapper>
        <ContactName>{name}:</ContactName> <span>{number}</span>
      </ContactTextWrapper>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
