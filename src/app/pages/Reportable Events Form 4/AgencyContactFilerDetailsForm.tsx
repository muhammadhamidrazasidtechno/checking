import React, { useState } from 'react';
import './AgencyContactFilerDetailsForm.css';

const AgencyContactFilerDetailsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    filerType: '',
    name: '',
    phoneNumber: '',
    email: '',
    providerOrAgency: '',
    informationReceivedDate: '',
    informationReceivedTime: '',
    workerInvolved: '',
    workerType: '',
    role: ''
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
      <h2>Agency Contact / Filer Details</h2>
      <span className='greenLine'></span>

      <form className="agency-contact-filer-details-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>FILER TYPE</label>
          <select name="filerType" value={formData.filerType} onChange={handleChange} required>
            <option value="" disabled>Select filer type</option>
            <option value="Agency Staff">Agency Staff</option>
          </select>
        </div>
        <div className="form-group">
          <label>NAME</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Enter name here" 
            required 
          />
        </div>
        <div className="form-group">
          <label>PHONE NUMBER</label>
          <input 
            type="tel" 
            name="phoneNumber" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            placeholder="+1 (number)" 
            required 
          />
        </div>
        <div className="form-group">
          <label>EMAIL *</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Enter email here" 
            required 
          />
        </div>
        <div className="form-group">
          <label>PROVIDER OR AGENCY/ADDRESS LOCATION</label>
          <input 
            type="text" 
            name="providerOrAgency" 
            value={formData.providerOrAgency} 
            onChange={handleChange} 
            placeholder="Enter location here" 
            required 
          />
        </div>
        <div className="form-group">
          <label>INFORMATION RECEIVED DATE</label>
          <input 
            type="date" 
            name="informationReceivedDate" 
            value={formData.informationReceivedDate} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>INFORMATION RECEIVED TIME</label>
          <input 
            type="time" 
            name="informationReceivedTime" 
            value={formData.informationReceivedTime} 
            onChange={handleChange} 
            required 
          />
        </div>
        <h3>Worker Details</h3>
        <span className='greenLine'></span>

        <div className="form-group">
          <label>WAS WORKER(S) INVOLVED IN EVENT?</label>
          <select name="workerInvolved" value={formData.workerInvolved} onChange={handleChange} required>
            <option value="" disabled>Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
        <div className="form-group">
          <label>WORKER TYPE</label>
          <select name="workerType" value={formData.workerType} onChange={handleChange} required>
            <option value="" disabled>Select worker type</option>
            <option value="Direct Service">Direct Service</option>
            <option value="Management/Supervisor">Management/Supervisor</option>
            <option value="Other/Specify">Other/Specify</option>
          </select>
        </div>
        <div className="form-group">
          <label>ROLE</label>
          <select name="role" value={formData.role} onChange={handleChange} required>
            <option value="" disabled>Select role</option>
            <option value="Participant">Participant</option>
            <option value="Witness">Witness</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button className="custom-button">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default AgencyContactFilerDetailsForm;