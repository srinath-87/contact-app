import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts((data) => [...data, contact]);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...contacts, contact])
    );
  };
  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    console.log("get", retrieveContacts);
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  // useEffect(() => {
  //   console.log("set", contacts);

  // }, [contacts]);
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
