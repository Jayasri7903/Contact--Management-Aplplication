import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const fetchContacts = async () => {
    const res = await axios.get('http://localhost:5000/api/contacts');
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      if (editingContact) {
        await axios.put(`http://localhost:5000/api/contacts/${editingContact._id}`, formData);
        setEditingContact(null);
      } else {
        await axios.post('http://localhost:5000/api/contacts', formData);
      }
      fetchContacts();
    } catch (error) {
      alert('Failed to submit data');
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/contacts/${id}`);
    fetchContacts();
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
  };

  return (
    <div className="container py-5">
      <div className="bg-white p-4 shadow rounded" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h2 className="text-center mb-4">📒 Contact Management System</h2>
        <ContactForm onSubmit={handleSubmit} editingContact={editingContact} />
        <ContactList contacts={contacts} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
