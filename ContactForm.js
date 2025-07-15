import React, { useEffect, useState } from 'react';

function ContactForm({ onSubmit, editingContact }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (editingContact) {
      setForm(editingContact);
    }
  }, [editingContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.address) {
      alert('Please fill in all fields');
      return;
    }
    onSubmit(form);
    setForm({
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phone: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-2">
        <div className="col-sm-6">
          <input
            className="form-control"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-sm-6">
          <input
            className="form-control"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-sm-12">
          <input
            className="form-control"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-sm-6">
          <input
            className="form-control"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            type="email"
          />
        </div>
        <div className="col-sm-6">
          <input
            className="form-control"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12 d-grid mt-2">
          <button className="btn btn-primary" type="submit">
            {editingContact ? 'Update Contact' : 'Create Contact'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
