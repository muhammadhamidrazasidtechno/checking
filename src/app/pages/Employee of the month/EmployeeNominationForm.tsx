import React, { useState } from 'react';
import './EmployeeNominationForm.css';

const EmployeeNominationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    employeeName: '',
    position: '',
    department: '',
    nominationReason: '',
    nominatorName: '',
    nominatorPhone: '',
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
      <h2>Employee of the Month Recognition</h2>
      <span className='greenLine'></span>

      <h3>Nomination Form</h3>
      <span className='greenLine'></span>

      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>The following employee should be considered for Employee of the Month:</label>
          <input
            type="text"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
            required
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label>Position</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            placeholder="Position"
          />
        </div>
        <div className="form-group">
          <label>Department</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            placeholder="Department"
          />
        </div>
        <div className="form-group">
          <label>I am nominating the above employee because he/she displays behaviors and qualities as I have outlined below:</label>
          <textarea
            name="nominationReason"
            value={formData.nominationReason}
            onChange={handleChange}
            required
            placeholder="Reason for nomination"
          />
        </div>
        <div className="form-group">
          <label>Nominator's name</label>
          <input
            type="text"
            name="nominatorName"
            value={formData.nominatorName}
            onChange={handleChange}
            required
            placeholder="Nominator's name"
          />
        </div>
        <div className="form-group">
          <label>Phone # where you can be contacted if we have any questions</label>
          <input
            type="text"
            name="nominatorPhone"
            value={formData.nominatorPhone}
            onChange={handleChange}
            required
            placeholder="Phone number"
          />
        </div>
        <div className="form-group">
          <label>Date</label>
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
      <p className='text-danger'>Please submit the completed nomination form to Betty Cox in Human Resources.</p>
    </div>
  );
};

export default EmployeeNominationForm;