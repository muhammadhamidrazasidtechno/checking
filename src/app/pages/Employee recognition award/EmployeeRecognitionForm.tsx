import React, { useState } from 'react';
import './EmployeeRecognitionForm.css';

const EmployeeRecognitionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nomineeName: '',
    nomineeDepartment: '',
    nomineeTelephone: '',
    nominatorName: '',
    nominatorDepartment: '',
    nominatorTelephone: '',
    nominatorSignature: '',
    date: '',
    supervisorName: '',
    supervisorDepartment: '',
    supervisorTelephone: '',
    supervisorEndorsement: '',
    nominationReason: '',
    jobPerformance: ''
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
      <h2>Employee Recognition Award Nomination Form</h2>
      <span className='greenLine'></span>

      <form className="recognition-form" onSubmit={handleSubmit}>
        <h3>Nominee's Information</h3>
        <span className='greenLine'></span>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="nomineeName"
            value={formData.nomineeName}
            onChange={handleChange}
            required
            placeholder="Nominee's Name"
          />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            name="nomineeDepartment"
            value={formData.nomineeDepartment}
            onChange={handleChange}
            required
            placeholder="Nominee's Department"
          />
        </div>
        <div className="form-group">
          <label>Office telephone:</label>
          <input
            type="text"
            name="nomineeTelephone"
            value={formData.nomineeTelephone}
            onChange={handleChange}
            required
            placeholder="Nominee's Office Telephone"
          />
        </div>

        <h3>Nominator's Information</h3>
        <span className='greenLine'></span>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="nominatorName"
            value={formData.nominatorName}
            onChange={handleChange}
            required
            placeholder="Nominator's Name"
          />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            name="nominatorDepartment"
            value={formData.nominatorDepartment}
            onChange={handleChange}
            required
            placeholder="Nominator's Department"
          />
        </div>
        <div className="form-group">
          <label>Office telephone:</label>
          <input
            type="text"
            name="nominatorTelephone"
            value={formData.nominatorTelephone}
            onChange={handleChange}
            required
            placeholder="Nominator's Office Telephone"
          />
        </div>
        <div className="form-group">
          <label>Signature:</label>
          <input
            type="text"
            name="nominatorSignature"
            value={formData.nominatorSignature}
            onChange={handleChange}
            required
            placeholder="Nominator's Signature"
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

        <h3>Supervisor's Information</h3>
        <span className='greenLine'></span>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="supervisorName"
            value={formData.supervisorName}
            onChange={handleChange}
            required
            placeholder="Supervisor's Name"
          />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            name="supervisorDepartment"
            value={formData.supervisorDepartment}
            onChange={handleChange}
            required
            placeholder="Supervisor's Department"
          />
        </div>
        <div className="form-group">
          <label>Office telephone:</label>
          <input
            type="text"
            name="supervisorTelephone"
            value={formData.supervisorTelephone}
            onChange={handleChange}
            required
            placeholder="Supervisor's Office Telephone"
          />
        </div>
        <div className="form-group">
          <label>Supervisor's endorsement:</label>
          <textarea
            name="supervisorEndorsement"
            value={formData.supervisorEndorsement}
            onChange={handleChange}
            required
            placeholder="Supervisor's Endorsement"
          />
        </div>

        <h3>Reason for Nomination</h3>
        <span className='greenLine'></span>

        <div className="form-group">
          <label>Why does this employee deserve to be SUNY Downstate Medical Center employee of the month?</label>
          <textarea
            name="nominationReason"
            value={formData.nominationReason}
            onChange={handleChange}
            required
            placeholder="Reason for nomination"
          />
        </div>
        <div className="form-group">
          <label>Describe how the nominee demonstrates excellence in the area of Job Performance, give specific examples:</label>
          <textarea
            name="jobPerformance"
            value={formData.jobPerformance}
            onChange={handleChange}
            required
            placeholder="Job Performance examples"
          />
        </div>

        <button className="custom-button">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default EmployeeRecognitionForm;