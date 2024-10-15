import React, { useState } from 'react';
import './ConfidentialityForm.css';

const ConfidentialityForm: React.FC = () => {
  const [formData, setFormData] = useState({
    confidentialityDesired: '',
    name: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: 'Maine',
    zip: ''
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
      <h2>Confidentiality and Complainant Information</h2>

      <span className='greenLine'></span>

      <p>
        The Division of Licensing & Certification (DLC) strives to ensure the privacy and anonymity of every complainant,
        however we are unable to guarantee confidentiality in the event of legal proceedings, including hearings. DLC follows
        the disclosure procedures outlined in the CMS State Operations Manual (SOM), Chapter 3, §3308 - Information That May Be
        Disclosed to Public; for all complaints related to federally requirements. DLC also follows applicable State of Maine
        statutes and rules regarding records disclosures of state agency investigations. DLC initially discloses the complainant's
        identity only to those individuals with a need to know who are acting in an official capacity to investigate the complaint.
      </p>
      <form className="confidentiality-form" onSubmit={handleSubmit}>
        <label>
          Is confidentiality desired?*
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="confidentialityDesired"
                value="Yes"
                onChange={handleChange}
                required
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="confidentialityDesired"
                value="No"
                onChange={handleChange}
                required
              />
              No
            </label>
          </div>
        </label>
        <h2>Information about you</h2>
        <span className='greenLine'></span>

        <label>
          Name *
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </label>
        <label>
          Address
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            placeholder="Address Line 1"
          />
          <input
            type="text"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
            placeholder="Address Line 2"
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
          />
        </label>
        <button className="custom-button">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default ConfidentialityForm;