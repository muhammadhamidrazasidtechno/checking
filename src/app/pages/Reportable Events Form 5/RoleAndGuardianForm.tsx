import React, { useState } from 'react';
import './RoleAndGuardianForm.css';

const RoleAndGuardianForm: React.FC = () => {
  const [formData, setFormData] = useState({
    role: '',
    anotherPersonInvolved: '',
    guardianNotified: '',
    guardianName: '',
    phone: '',
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
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
      <h2>Role and Guardian Information</h2>
      <span className='greenLine'></span>

      <form className="role-and-guardian-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ROLE</label>
          <select 
            name="role" 
            value={formData.role} 
            onChange={handleChange} 
            required
          >
            <option value="">Select role</option>
            <option value="Participant">Participant</option>
            <option value="Witness">Witness</option>
            <option value="Other">Other</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>WAS ANOTHER PERSON(S) INVOLVED IN EVENT?</label>
          <select 
            name="anotherPersonInvolved" 
            value={formData.anotherPersonInvolved} 
            onChange={handleChange} 
            required
          >
            <option value="">Select answer</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
        <div className="form-group">
          <label>ROLE</label>
          <select 
            name="role" 
            value={formData.role} 
            onChange={handleChange} 
            required
          >
            <option value="">Select role</option>
            <option value="Participant">Participant</option>
            <option value="Witness">Witness</option>
            <option value="Other">Other</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Family/Guardian Notifications</label>
          <select 
            name="guardianNotified" 
            value={formData.guardianNotified} 
            onChange={handleChange} 
            required
          >
            <option value="">Select answer</option>
            <option value="Yes">Yes</option>
            <option value="No Guardian">No Guardian</option>
          </select>
        </div>
        {formData.guardianNotified === 'Yes' && (
          <>
            <div className="form-group">
              <label>GUARDIAN NAME *</label>
              <input 
                type="text" 
                name="guardianName" 
                value={formData.guardianName} 
                onChange={handleChange} 
                placeholder="Enter guardian name here" 
                required 
              />
            </div>
            <div className="form-group">
              <label>PHONE</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="+1 (number)" 
                required 
              />
            </div>
            <div className="form-group">
              <label>ADDRESS</label>
              <textarea 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                placeholder="Enter address here" 
                rows={3} 
                required 
              />
            </div>
          </>
        )}
        <button className="custom-button">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default RoleAndGuardianForm;