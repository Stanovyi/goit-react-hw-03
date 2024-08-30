import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import contactsArray from "./data/contacts.js";
import s from "./App.module.css";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("Contacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return contactsArray;
  });
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    return window.localStorage.setItem("Contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const filteredArray = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  console.log(filterValue);

  return (
    <div>
      <h1 className={s.heading}>📗 Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox searchValue={filterValue} onFilter={setFilterValue} />
      <ContactList contacts={filteredArray} onDelete={deleteContact} />
    </div>
  );
};

export default App;
