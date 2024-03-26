import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactList from './components/ContactList/ContactList.jsx';

const contactsData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const data = localStorage.getItem('contacts');
    return data ? JSON.parse(data) : contactsData;
  });
  const [filter, setFilter] = useState('');

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  const onAddNewContact = contactData => {
    const finalContacts = {
      ...contactData,
      id: nanoid(),
    };
    setContacts(prevState => [...prevState, finalContacts]);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  const delObjLocalStorage = id => {
    const data = JSON.parse(localStorage.getItem('contacts'));
    const updatedContacts = data.filter(contact => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const handleDelete = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
    delObjLocalStorage(contactId);
  };

  return (
    <div className="wrapper">
      <h1>Phonebook</h1>
      <ContactForm onAddNewContact={onAddNewContact} />
      <SearchBox searchContact={setFilter} />
      <ContactList contacts={visibleContacts} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
