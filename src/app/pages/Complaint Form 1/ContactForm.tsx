import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    emailAddress: '',
    personName: '',
    relationship: '',
    facilityName: '',
    facilityAddress1: '',
    facilityAddress2: ''
  });

  const [submittedData, setSubmittedData] = useState<any | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      phoneNumber: '',
      emailAddress: '',
      personName: '',
      relationship: '',
      facilityName: '',
      facilityAddress1: '',
      facilityAddress2: ''
    });
  };





  return (
    <div className="form-card">
      <h2>Contact Form</h2>
      <span className='greenLine'></span>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </label>
        <label>
          Email Address:
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Enter email address"
            required
          />
        </label>
        <label>
          Name of the Person:
          <input
            type="text"
            name="personName"
            value={formData.personName}
            onChange={handleChange}
            placeholder="Enter person's name"
            required
          />
        </label>
        <label>
          Relationship:
          <input
            type="text"
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            placeholder="Enter your relationship"
            required
          />
        </label>
        <label>
          Facility Name:
          <input
            type="text"
            name="facilityName"
            value={formData.facilityName}
            onChange={handleChange}
            placeholder="Enter facility name"
            required
          />
        </label>
        <label>
          Facility Address:
          <input
            type="text"
            name="facilityAddress1"
            value={formData.facilityAddress1}
            onChange={handleChange}
            placeholder="Enter address line 1"
            required
          />
          <input
            type="text"
            name="facilityAddress2"
            value={formData.facilityAddress2}
            onChange={handleChange}
            placeholder="Enter address line 2"
          />
        </label>
        <button className="custom-button" type="submit">
          <span>Submit</span>
        </button>
      </form>

    </div>
  );
};

export default ContactForm;