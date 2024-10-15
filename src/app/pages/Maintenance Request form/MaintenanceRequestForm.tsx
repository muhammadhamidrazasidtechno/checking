import React, { useState } from 'react';
import './MaintenanceRequestForm.css';

const MaintenanceRequestForm: React.FC = () => {
  // Define the keys for broken items
  type BrokenItems = {
    tvCable: boolean;
    lightBulb: boolean;
    phone: boolean;
    routerWifiPassword: boolean;
    routerInternet: boolean;
    tvRemote: boolean;
    mattress: boolean;
    shampooConditioner: boolean;
    bedframe: boolean;
    soap: boolean;
    chair: boolean;
    showerCap: boolean;
    table: boolean;
    towels: boolean;
    fridge: boolean;
    sheets: boolean;
    sink: boolean;
    iceBucket: boolean;
    toilet: boolean;
    hairDryer: boolean;
    shower: boolean;
    iron: boolean;
    other: boolean;
  };

  const [formData, setFormData] = useState({
    programName: '',
    address: '',
    date: '',
    requestedBy: '',
    brokenItems: {
      tvCable: false,
      lightBulb: false,
      phone: false,
      routerWifiPassword: false,
      routerInternet: false,
      tvRemote: false,
      mattress: false,
      shampooConditioner: false,
      bedframe: false,
      soap: false,
      chair: false,
      showerCap: false,
      table: false,
      towels: false,
      fridge: false,
      sheets: false,
      sink: false,
      iceBucket: false,
      toilet: false,
      hairDryer: false,
      shower: false,
      iron: false,
      other: false,
    },
    comments: '',
    priorityLevel: 'Medium',
    receivedBy: '',
    assignedTo: '',
    completedOn: '',
    signature: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      brokenItems: {
        ...prevState.brokenItems,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="form-card">
      <h2>Maintenance Request Form</h2>
      <span className='greenLine'></span>

      <form className="maintenance-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Program Name:</label>
          <input
            type="text"
            name="programName"
            value={formData.programName}
            onChange={handleChange}
            required
            placeholder="Program Name"
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Address"
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
        <div className="form-group">
          <label>Requested by:</label>
          <input
            type="text"
            name="requestedBy"
            value={formData.requestedBy}
            onChange={handleChange}
            required
            placeholder="Requested by"
          />
        </div>
        <h3>Broken Item(s):</h3>
        <span className='greenLine'></span>

        {Object.keys(formData.brokenItems).map((item) => (
          <div key={item} className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name={item}
                checked={(formData.brokenItems as BrokenItems)[item as keyof BrokenItems]} // Type assertion
                onChange={handleCheckboxChange}
              />
              {item.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
            </label>
          </div>
        ))}
        <div className="form-group">
          <label>Comments:</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Comments"
          />
        </div>
        <div className="form-group">
          <label>Priority Level:</label>
          <select name="priorityLevel" value={formData.priorityLevel} onChange={handleChange}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="form-group">
          <label>Received by:</label>
          <input
            type="text"
            name="receivedBy"
            value={formData.receivedBy}
            onChange={handleChange}
            placeholder="Received by"
          />
        </div>
        <div className="form-group">
          <label>Assigned to:</label>
          <input
            type="text"
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleChange}
            placeholder="Assigned to"
          />
        </div>
        <div className="form-group">
          <label>Completed on:</label>
          <input
            type="date"
            name="completedOn"
            value={formData.completedOn}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Signature:</label>
          <input
            type="text"
            name="signature"
            value={formData.signature}
            onChange={handleChange}
            placeholder="Signature"
          />
        </div>
        <div className="form-group">
          <label>Notes:</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Notes"
          />
        </div>
        <button className="custom-button">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default MaintenanceRequestForm;
