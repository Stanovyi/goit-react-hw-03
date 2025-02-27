import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map((contact) => {
        return (
          <li className={s.listItem} key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
