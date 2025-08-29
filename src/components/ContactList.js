import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={props.getContactId}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main">
      <h2 className="contact-list-header">
        <span>Contact List</span>
        <Link to="/add">
          <button className="ui button blue">Add contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
