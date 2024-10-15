import React, { useState } from 'react';
import './ManagerDailyChecklist.css';

const ManagerDailyChecklist: React.FC = () => {
  const [formData, setFormData] = useState({
    supervisorSignature: '',
    date: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      <h2>Manager Daily Checklist</h2>
      <span className='greenLine'></span>

      <form className="checklist-form" onSubmit={handleSubmit}>
        <div className="checklist-tasks">
          <p>Ensure foods are labeled and dispose of all expired foods.</p>
          <p>Discuss and schedule daily activities with residents and other staff.</p>
          <p>Complete medication inventory once a week and send inventory to program manager or Chris. Ensure that all the Doctor's orders are current and inform them if a new order is needed.</p>
          <p>Complete timesheet and mileage log every day.</p>
        </div>
        <div className="form-group">
          <label>Supervisor Signature:</label>
          <input 
            type="text" 
            name="supervisorSignature" 
            value={formData.supervisorSignature} 
            onChange={handleChange} 
            required 
            placeholder="Supervisor Signature" 
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input 
            type="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button className="custom-button">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default ManagerDailyChecklist;