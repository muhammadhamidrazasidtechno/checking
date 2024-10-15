import React, { useState } from 'react';
import './ReportableEventsForm.css';

const ReportableEventsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    eventType: '',
    clientFirstName: '',
    clientLastName: '',
    dateOfBirth: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="form-card">
      <h2>Home » Reportable Events</h2>
      <span className='greenLine'></span>
      <p className='text-danger'>Please provide the following information in the form:</p>
      <form className="reportable-events-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Type *</label>
          <select name="eventType" value={formData.eventType} onChange={handleChange} required>
            <option value="" disabled>Select an event type</option>
            <option value="Dangerous Situation">Dangerous Situation</option>
            <option value="Death">Death</option>
            <option value="Emergency Department Visit">Emergency Department Visit</option>
            <option value="Emergency Restraint">Emergency Restraint</option>
            <option value="Hospital Admission - Planned/Unplanned">Hospital Admission - Planned/Unplanned</option>
            <option value="Law Enforcement Intervention">Law Enforcement Intervention</option>
            <option value="Lost or Missing Person">Lost or Missing Person</option>
            <option value="Medical Treatment Other Than Hospital">Medical Treatment Other Than Hospital</option>
            <option value="Medication Error">Medication Error</option>
            <option value="Physical Plant Disaster">Physical Plant Disaster</option>
            <option value="Physical Assault/Altercation">Physical Assault/Altercation</option>
            <option value="Rights Violation">Rights Violation</option>
            <option value="Serious Injury">Serious Injury</option>
            <option value="Suicide Attempt">Suicide Attempt</option>
            <option value="Suicide Threat">Suicide Threat</option>
            <option value="Transportation Accident">Transportation Accident</option>
            <option value="Property Damage">Property Damage</option>
            <option value="Elopement">Elopement</option>
          </select>
        </div>
        <div className="form-group">
          <label>CLIENT FIRST NAME *</label>
          <input 
            type="text" 
            name="clientFirstName" 
            value={formData.clientFirstName} 
            onChange={handleChange} 
            required 
            placeholder="Enter client first name here" 
          />
        </div>
        <div className="form-group">
          <label>CLIENT LAST NAME *</label>
          <input 
            type="text" 
            name="clientLastName" 
            value={formData.clientLastName} 
            onChange={handleChange} 
            required 
            placeholder="Enter client last name here" 
          />
        </div>
        <div className="form-group">
          <label>DATE OF BIRTH *</label>
          <input 
            type="date" 
            name="dateOfBirth" 
            value={formData.dateOfBirth} 
            onChange={handleChange} 
            required 
            placeholder="Enter date here" 
          />
        </div>
        <button className="custom-button">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default ReportableEventsForm;