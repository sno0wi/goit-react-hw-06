import Contact from '../Contact/Contact.jsx';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          handleDelete={handleDelete}
        />
      ))}
    </>
  );
};

export default ContactList;
