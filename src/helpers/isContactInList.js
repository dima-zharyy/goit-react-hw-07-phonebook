export const isContactInList = (contacts, newName) => {
  return contacts.some(
    ({ name }) => name.toLocaleLowerCase() === newName.toLocaleLowerCase()
  );
};
