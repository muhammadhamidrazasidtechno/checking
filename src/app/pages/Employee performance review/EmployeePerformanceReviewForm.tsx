import React, { useState, ChangeEvent, FormEvent } from 'react';
import './EmployeePerformanceReviewForm.css';

// Define TypeScript interfaces for better type safety
interface FormData {
  employeeName: string;
  position: string;
  department: string;
  date: string;
  finalValue: string;
  criteria: string[]; // Array of strings representing selected values
  employeeComments: string;
  directSuperiorComments: string;
  hrdComments: string;
  employeeSignature: string;
  superiorSignature: string;
  hrdSignature: string;
}

const EmployeePerformanceReviewForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    employeeName: '',
    position: '',
    department: '',
    date: '',
    finalValue: '',
    criteria: Array(15).fill(''),
    employeeComments: '',
    directSuperiorComments: '',
    hrdComments: '',
    employeeSignature: '',
    superiorSignature: '',
    hrdSignature: ''
  });

  // Updated event type to include HTMLSelectElement
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    index?: number
  ) => {
    const { name, value } = e.target;
    if (index !== undefined) {
      const newCriteria = [...formData.criteria];
      newCriteria[index] = value;
      setFormData(prevState => ({
        ...prevState,
        criteria: newCriteria
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here, e.g., send data to a server
  };

  const criteriaLabels = [
    "Customer Service Oriented",
    "Communication Skill",
    "Eagerness to Learn",
    "Team Work",
    "Leadership",
    "Work Under Pressure",
    "Attendance/Punctuality",
    "Work on Deadline",
    "Willingness to Take More Responsibilities",
    "Open to Feedback",
    "Creativity",
    "Productivity",
    "Ability to Work Independently",
    "Initiative",
    "Effective Problem Solving Skills"
  ];

  return (
    <div className="form-card">
      <h2>Employee Performance Review</h2>
      <span className='greenLine'></span>

      <form className="employee-form" onSubmit={handleSubmit}>
        {/* Employee Details */}
        <div className="form-group">
          <label htmlFor="employeeName">Employee Name</label>
          <input
            type="text"
            id="employeeName"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
            required
            placeholder="Employee Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            placeholder="Position"
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            placeholder="Department"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="finalValue">Final Value</label>
          <input
            type="text"
            id="finalValue"
            name="finalValue"
            value={formData.finalValue}
            onChange={handleChange}
            required
            placeholder="Final Value"
          />
        </div>

        {/* Criteria Section */}
        <h3>Criteria</h3>
        <span className='greenLine1 '></span>

        {criteriaLabels.map((label, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={`criteria-${index}`}>{label}</label>
            <select
              id={`criteria-${index}`}
              name={`criteria-${index}`}
              value={formData.criteria[index]}
              onChange={(e) => handleChange(e, index)}
              required
            >
              <option value="">Select</option>
              <option value="1">No</option>
              <option value="2">Deficient</option>
              <option value="3">Below Standard</option>
              <option value="4">Meets Expectation</option>
              <option value="5">Above Standard</option>
              <option value="6">Outstanding</option>
            </select>
          </div>
        ))}

        {/* Comments Section */}
        <div className="form-group">
          <label htmlFor="employeeComments">Employee Comments</label>
          <textarea
            id="employeeComments"
            name="employeeComments"
            value={formData.employeeComments}
            onChange={handleChange}
            required
            placeholder="Employee Comments"
          />
        </div>
        <div className="form-group">
          <label htmlFor="directSuperiorComments">Direct Superior Comments</label>
          <textarea
            id="directSuperiorComments"
            name="directSuperiorComments"
            value={formData.directSuperiorComments}
            onChange={handleChange}
            required
            placeholder="Direct Superior Comments"
          />
        </div>
        <div className="form-group">
          <label htmlFor="hrdComments">HRD Comments</label>
          <textarea
            id="hrdComments"
            name="hrdComments"
            value={formData.hrdComments}
            onChange={handleChange}
            required
            placeholder="HRD Comments"
          />
        </div>

        {/* Signature Section */}
        <div className="form-group">
          <label htmlFor="employeeSignature">Employee Signature (Name/Position/Signature)</label>
          <input
            type="text"
            id="employeeSignature"
            name="employeeSignature"
            value={formData.employeeSignature}
            onChange={handleChange}
            required
            placeholder="Employee Signature"
          />
        </div>
        <div className="form-group">
          <label htmlFor="superiorSignature">Direct Superior Signature (Name/Position/Signature)</label>
          <input
            type="text"
            id="superiorSignature"
            name="superiorSignature"
            value={formData.superiorSignature}
            onChange={handleChange}
            required
            placeholder="Direct Superior Signature"
          />
        </div>
        <div className="form-group">
          <label htmlFor="hrdSignature">HRD Signature (Name/Position/Signature)</label>
          <input
            type="text"
            id="hrdSignature"
            name="hrdSignature"
            value={formData.hrdSignature}
            onChange={handleChange}
            required
            placeholder="HRD Signature"
          />
        </div>

        <button className="custom-button">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default EmployeePerformanceReviewForm;
