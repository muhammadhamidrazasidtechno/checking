import React, { useState } from 'react';
import './ReportableEventInformationForm.css';

const ReportableEventInformationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    shortDescriptionOfEvent: '',
    reporterName: '',
    workTelephone: '',
    reporterType: '',
    reporterRole: '',
    methodOfReporting: '',
    filerType: ''
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
      <h2>Reportable Event Information</h2>
      <span className='greenLine'></span>

      <form className="reportable-event-information-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>SHORT DESCRIPTION OF EVENT</label>
          <textarea 
            name="shortDescriptionOfEvent" 
            value={formData.shortDescriptionOfEvent} 
            onChange={() => handleChange} 
            placeholder="Enter details here" 
            required 
          />
        </div>
        <div className="form-group">
          <label>REPORTER NAME</label>
          <input 
            type="text" 
            name="reporterName" 
            value={formData.reporterName} 
            onChange={handleChange} 
            placeholder="Enter name here" 
            required 
          />
        </div>
        <div className="form-group">
          <label>WORK TELEPHONE</label>
          <input 
            type="tel" 
            name="workTelephone" 
            value={formData.workTelephone} 
            onChange={handleChange} 
            placeholder="Enter number here" 
            required 
          />
        </div>
        <div className="form-group">
          <label>REPORTER TYPE</label>
          <select name="reporterType" value={formData.reporterType} onChange={handleChange} required>
            <option value="" disabled>Select reporter type</option>
            <option value="Consumer">Consumer</option>
            <option value="Caseworker">Caseworker</option>
            <option value="Family Member">Family Member</option>
            <option value="Guardian">Guardian</option>
            <option value="DS Provider Direct Care">DS Provider Direct Care</option>
            <option value="DS Provider/Manager/Supervisor">DS Provider/Manager/Supervisor</option>
            <option value="DS Crisis Team">DS Crisis Team</option>
            <option value="DS APS Intake Unit">DS APS Intake Unit</option>
            <option value="Other">Other (Specify)</option>
          </select>
        </div>
        <div className="form-group">
          <label>REPORTER ROLE</label>
          <input 
            type="text" 
            name="reporterRole" 
            value={formData.reporterRole} 
            onChange={handleChange} 
            placeholder="Participant in Event" 
            required 
          />
        </div>
        <div className="form-group">
          <label>METHOD OF REPORTING</label>
          <input 
            type="text" 
            name="methodOfReporting" 
            value={formData.methodOfReporting} 
            onChange={handleChange} 
            placeholder="Enter method of reporting" 
            required 
          />
        </div>
        <div className="form-group">
          <label>FILER TYPE</label>
          <select name="filerType" value={formData.filerType} onChange={handleChange} required>
            <option value="" disabled>Select filer type</option>
            <option value="Agency Staff">Agency Staff</option>
            <option value="Call">Call</option>
            <option value="Email">Email</option>
          </select>
        </div>
        <button className="custom-button">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default ReportableEventInformationForm;