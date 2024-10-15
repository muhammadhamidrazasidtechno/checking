import React, { useState } from 'react';
import './FacilityComplaintForm.css';

const FacilityComplaintForm: React.FC = () => {
  const [formData, setFormData] = useState({
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: 'Maine',
    zip: '',
    incidentLocation: '',
    complaintDetails: '',
    dateOfIncident: '',
    timeOfIncident: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      <h2>Address of Facility</h2>
      <span className='greenLine'></span>

      <form className="facility-form" onSubmit={handleSubmit}>
        <label>
          Address Line 1
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            placeholder="Enter address line 1"
            required
          />
        </label>
        <label>
          Address Line 2
          <input
            type="text"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
            placeholder="Enter address line 2"
          />
        </label>
        <label>
          City
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city"
            required
          />
        </label>
        <label>
          State
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Maine"
            readOnly
          />
        </label>
        <label>
          Zip
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            placeholder="Enter zip code"
            required
          />
        </label>
        <label>
          If this is a facility that provides both residential care and nursing home (SNF/NF) level of care, where did this incidence/issue occur?
          <select
            name="incidentLocation"
            value={formData.incidentLocation}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select an option --</option>
            <option value="Residential Care">Residential Care</option>
            <option value="Nursing Home">Nursing Home</option>
          </select>
        </label>
        <h2>Complaint Details</h2>
        <span className='greenLine'></span>

        <label>
          What happened? How did it happen? Was any harm caused?
          <textarea
            name="complaintDetails"
            value={formData.complaintDetails}
            onChange={handleChange}
            placeholder="Describe the incident"
            required
          />
        </label>
        <label>
          Date of Incident *
          <input
            type="date"
            name="dateOfIncident"
            value={formData.dateOfIncident}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Time of Incident
          <input
            type="time"
            name="timeOfIncident"
            value={formData.timeOfIncident}
            onChange={handleChange}
          />
        </label>
        <button className="custom-button">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default FacilityComplaintForm;