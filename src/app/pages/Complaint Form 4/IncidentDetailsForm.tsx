import React, { useState } from 'react';
import './IncidentDetailsForm.css';

const IncidentDetailsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    residentStillInFacility: '',
    anyoneElseInvolved: '',
    anyWitnesses: '',
    spokenToStaff: '',
    facilityTriedToAddress: '',
    lawEnforcementInvolved: '',
    happenedBefore: ''
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
      <h2>Incident Details</h2>
      <span className='greenLine'></span>

      <form className="incident-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Is the resident/patient still in the facility?</label>
          <select name="residentStillInFacility" value={formData.residentStillInFacility} onChange={handleChange} required>
            <option value="" disabled>Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Is anyone else involved?</label>
          <select name="anyoneElseInvolved" value={formData.anyoneElseInvolved} onChange={handleChange} required>
            <option value="" disabled>Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Are there any witnesses?</label>
          <select name="anyWitnesses" value={formData.anyWitnesses} onChange={handleChange} required>
            <option value="" disabled>Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Have you spoken to the Administrator, Manager or any staff of the facility?</label>
          <select name="spokenToStaff" value={formData.spokenToStaff} onChange={handleChange} required>
            <option value="" disabled>Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Has the facility tried to address the situation?</label>
          <select name="facilityTriedToAddress" value={formData.facilityTriedToAddress} onChange={handleChange} required>
            <option value="" disabled>Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Are law enforcement involved?</label>
          <select name="lawEnforcementInvolved" value={formData.lawEnforcementInvolved} onChange={handleChange} required>
            <option value="" disabled>Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Do you know if this has happened before to the same individual, or to others?</label>
          <select name="happenedBefore" value={formData.happenedBefore} onChange={handleChange} required>
            <option value="" disabled>Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="custom-button">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default IncidentDetailsForm;