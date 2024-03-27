import Contact from '../Contact/Contact.jsx';
import { selectContacts } from '../../redux/contactsSlice.js';
import { selectNameFilter } from '../../redux/filtersSlice.js';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameContactFilter = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.text.name.toLowerCase().includes(nameContactFilter.toLowerCase())
  );

  return (
    <>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </>
  );
};

export default ContactList;
