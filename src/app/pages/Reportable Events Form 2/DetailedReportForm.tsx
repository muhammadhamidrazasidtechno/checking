import React, { useState } from 'react';
import './DetailedReportForm.css';

const DetailedReportForm: React.FC = () => {
  const [formData, setFormData] = useState({
    dateOfBirth: '',
    eventStartDate: '',
    eventEndDate: '',
    dateReportedToDHHS: '',
    departmentReportedTo: '',
    programType: '',
    eventStartTime: '',
    eventEndTime: '',
    dhhsPersonReportedTo: '',
    incidentDataSpecialist: ''
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
      <h2>Detailed Report Form</h2>
      <span className='greenLine'></span>

      <form className="detailed-report-form" onSubmit={handleSubmit}>
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
        <div className="form-group">
          <label>EVENT START DATE</label>
          <input 
            type="date" 
            name="eventStartDate" 
            value={formData.eventStartDate} 
            onChange={handleChange} 
            placeholder="Enter start date here" 
          />
        </div>
        <div className="form-group">
          <label>EVENT END DATE</label>
          <input 
            type="date" 
            name="eventEndDate" 
            value={formData.eventEndDate} 
            onChange={handleChange} 
            placeholder="Enter end date here" 
          />
        </div>
        <div className="form-group">
          <label>DATE REPORTED TO DHHS</label>
          <input 
            type="date" 
            name="dateReportedToDHHS" 
            value={formData.dateReportedToDHHS} 
            onChange={handleChange} 
            placeholder="Enter date here" 
          />
        </div>
        <div className="form-group">
          <label>DEPARTMENT REPORTED TO</label>
          <select name="departmentReportedTo" value={formData.departmentReportedTo} onChange={handleChange}>
            <option value="" disabled>Select department</option>
            <option value="DS Caseworker">DS Caseworker</option>
            <option value="DS Crisis">DS Crisis</option>
            <option value="DS Regional Supervisor/PA">DS Regional Supervisor/PA</option>
          </select>
        </div>
        <div className="form-group">
          <label>PROGRAM TYPE</label>
          <select name="programType" value={formData.programType} onChange={handleChange}>
            <option value="" disabled>Select program type</option>
            <option value="DS Home Supports">DS Home Supports</option>
            <option value="DS Crisis">DS Crisis</option>
            <option value="DS Community Supports">DS Community Supports</option>
            <option value="Other">Other (Specify)</option>
          </select>
        </div>
        <div className="form-group">
          <label>EVENT START TIME</label>
          <input 
            type="time" 
            name="eventStartTime" 
            value={formData.eventStartTime} 
            onChange={handleChange} 
            placeholder="Enter time here" 
          />
        </div>
        <div className="form-group">
          <label>EVENT END TIME</label>
          <input 
            type="time" 
            name="eventEndTime" 
            value={formData.eventEndTime} 
            onChange={handleChange} 
            placeholder="Enter time here" 
          />
        </div>
        <div className="form-group">
          <label>DHHS PERSON REPORTED TO</label>
          <input 
            type="text" 
            name="dhhsPersonReportedTo" 
            value={formData.dhhsPersonReportedTo} 
            onChange={handleChange} 
            placeholder="Enter person here" 
          />
        </div>
        <div className="form-group">
          <label>Incident Data Specialist (EIS entry only)</label>
          <input 
            type="text" 
            name="incidentDataSpecialist" 
            value={formData.incidentDataSpecialist} 
            onChange={handleChange} 
            placeholder="DS Employment Support" 
          />
        </div>
        <button className="custom-button">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default DetailedReportForm;