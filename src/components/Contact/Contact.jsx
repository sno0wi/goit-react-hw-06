import { IoIosContact } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';
import css from '../Contact/Contact.module.css';

const Contact = ({ contact, handleDelete }) => {
  return (
    <div key={contact.id} className={css.item}>
      <p className={css.name}>
        <IoIosContact size={22} />
        {contact.name}
      </p>
      <p className={css.number}>
        <FaPhone />
        {contact.number}
      </p>
      <button
        type="button"
        className={css.btn}
        onClick={() => handleDelete(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
