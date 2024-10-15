import React, { useState } from 'react';
import './DisciplinaryActionForm.css';

const DisciplinaryActionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    employeeName: '',
    disciplinaryAction: '',
    detailsOfOccurrence: '',
    dateOfOccurrence: '',
    hasInfractionOccurredBefore: '',
    firstDate: '',
    firstActionTaken: '',
    secondDate: '',
    secondActionTaken: '',
    thirdDate: '',
    thirdActionTaken: '',
    correctiveAction: '',
    actionDetails: '',
    supervisorSignature: '',
    supervisorDate: ''
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
      <h2>Disciplinary Action Form</h2>
      <span className='greenLine'></span>

      <form className="disciplinary-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name of Employee:</label>
          <input
            type="text"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>I. Disciplinary Action</label>
          <select
            name="disciplinaryAction"
            value={formData.disciplinaryAction}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="Tardiness">Tardiness</option>
            <option value="Absenteeism">Absenteeism</option>
            <option value="Insubordination">Insubordination</option>
            <option value="Work performance">Work performance</option>
            <option value="Dress Code">Dress Code</option>
            <option value="Safety">Safety</option>
            <option value="Substance">Substance</option>
            <option value="Policy Violation">Policy Violation</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>II. Details of Occurrence (Attach additional sheet if necessary)</label>
          <textarea
            name="detailsOfOccurrence"
            value={formData.detailsOfOccurrence}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Occurrence:</label>
          <input
            type="date"
            name="dateOfOccurrence"
            value={formData.dateOfOccurrence}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>III. Has this or a similar infraction occurred before?</label>
          <select
            name="hasInfractionOccurredBefore"
            value={formData.hasInfractionOccurredBefore}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        {formData.hasInfractionOccurredBefore === 'Yes' && (
          <>
            <div className="form-group">
              <label>First Occurrence</label>
              <input
                type="date"
                name="firstDate"
                value={formData.firstDate}
                onChange={handleChange}
              />
              <textarea
                name="firstActionTaken"
                value={formData.firstActionTaken}
                onChange={handleChange}
                placeholder="Action Taken"
              />
            </div>
            <div className="form-group">
              <label>Second Occurrence</label>
              <input
                type="date"
                name="secondDate"
                value={formData.secondDate}
                onChange={handleChange}
              />
              <textarea
                name="secondActionTaken"
                value={formData.secondActionTaken}
                onChange={handleChange}
                placeholder="Action Taken"
              />
            </div>
            <div className="form-group">
              <label>Third Occurrence</label>
              <input
                type="date"
                name="thirdDate"
                value={formData.thirdDate}
                onChange={handleChange}
              />
              <textarea
                name="thirdActionTaken"
                value={formData.thirdActionTaken}
                onChange={handleChange}
                placeholder="Action Taken"
              />
            </div>
          </>
        )}
        <div className="form-group">
          <label>IV. Corrective action to be taken:</label>
          <select
            name="correctiveAction"
            value={formData.correctiveAction}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="Verbal Counseling">Verbal Counseling</option>
            <option value="Written Warning">Written Warning</option>
            <option value="Disciplinary Suspension">Disciplinary Suspension</option>
            <option value="Final Warning">Final Warning</option>
            <option value="Counseling with Human Resources">Counseling with Human Resources</option>
            <option value="Termination">Termination</option>
          </select>
        </div>
        <div className="form-group">
          <label>V. Action details:</label>
          <textarea
            name="actionDetails"
            value={formData.actionDetails}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Supervisor Signature:</label>
          <input
            type="text"
            name="supervisorSignature"
            value={formData.supervisorSignature}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="supervisorDate"
            value={formData.supervisorDate}
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

export default DisciplinaryActionForm;