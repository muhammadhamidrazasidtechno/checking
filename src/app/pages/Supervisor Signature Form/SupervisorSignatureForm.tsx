import React, { useState } from 'react';
import './SupervisorSignatureForm.css';

const SupervisorSignatureForm: React.FC = () => {
  const [formData, setFormData] = useState({
    supervisorSignature: '',
    supervisorDate: '',
    staffSignature: '',
    staffDate: '',
    employeeSignature: '',
    employeeDate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <h2>Supervisor Signature</h2>
      <span className='greenLine'></span>

      <form className="supervisor-signature-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Supervisor Signature</label>
          <input
            type="text"
            name="supervisorSignature"
            value={formData.supervisorSignature}
            onChange={handleChange}
            placeholder="Enter supervisor signature"
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="supervisorDate"
            value={formData.supervisorDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Staff Signature</label>
          <input
            type="text"
            name="staffSignature"
            value={formData.staffSignature}
            onChange={handleChange}
            placeholder="Enter staff signature"
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="staffDate"
            value={formData.staffDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Employee Statement</label>
          <p className='text-danger'>
            I acknowledge by my signature below that I have been given the opportunity to present my views and explanations and I am signing this review prior to it being placed in my personnel file. I also understand the corrective actions to be taken by my supervisor and consequences if my improvement is unsatisfactory or I receive further disciplinary actions.
          </p>
        </div>
        <div className="form-group">
          <label>Employee Signature</label>
          <input
            type="text"
            name="employeeSignature"
            value={formData.employeeSignature}
            onChange={handleChange}
            placeholder="Enter employee signature"
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="employeeDate"
            value={formData.employeeDate}
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

export default SupervisorSignatureForm;