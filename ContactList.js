import React from 'react';

function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <div>
      {contacts.map((contact) => (
        <div
          key={contact._id}
          className="d-flex justify-content-between align-items-center p-3 mb-2 border rounded bg-light"
        >
          <div>
            <strong>{contact.firstName} {contact.lastName}</strong> <br />
            <small>{contact.address}</small> | <small>{contact.phone}</small> | <small>{contact.email}</small> 
          </div>
          <div>
            <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(contact)}>
              Edit
            </button>
            <button className="btn btn-danger btn-sm" onClick={() => onDelete(contact._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
