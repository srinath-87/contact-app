import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const inputE1 = useRef();
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={props.getContactId}
        key={contact.id}
      />
    );
  });
  const getSearchTerm = () => {
    props.searchKeyword(inputE1.current.value);
  };
  return (
    <div className="main">
      <h2 className="contact-list-header">
        <span>Contact List</span>
        <Link to="/add">
          <button className="ui button blue">Add contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputE1}
            className="prompt"
            type="text"
            placeholder="Search Contacts"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderContactList.length > 0
          ? renderContactList
          : "No Contact Available"}
      </div>
    </div>
  );
};

export default ContactList;
