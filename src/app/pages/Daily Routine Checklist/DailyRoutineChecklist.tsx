import React, { useState } from 'react';
import './DailyRoutineChecklist.css';

const DailyRoutineChecklist: React.FC = () => {
  // Define a union type for days of the week
  type Day = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';

  const [formData, setFormData] = useState({
    program: '',
    supervisor: '',
    tasks: {
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: ''
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Use the 'Day' type for the 'day' parameter to ensure only valid keys are used
  const handleTaskChange = (day: Day, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      tasks: {
        ...prevState.tasks,
        [day]: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="form-card">
      <h2>Daily Routine Checklist</h2>
      <span className='greenLine'></span>

      <form className="routine-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Program:</label>
          <input
            type="text"
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
            placeholder="Program"
          />
        </div>
        <div className="form-group">
          <label>Supervisor:</label>
          <input
            type="text"
            name="supervisor"
            value={formData.supervisor}
            onChange={handleChange}
            required
            placeholder="Supervisor"
          />
        </div>
        <h3>Daily Routine</h3>
        <span className='greenLine'></span>

        {(['monday', 'tuesday', 'wednesday', 'thursday', 'friday'] as Day[]).map(day => (
          <div key={day} className="form-group">
            <label>{day.charAt(0).toUpperCase() + day.slice(1)}</label>
            <textarea
              name={day}
              value={formData.tasks[day]}
              onChange={(e) => handleTaskChange(day, e.target.value)}
              placeholder="Initials"
            />
          </div>
        ))}
        <div className="routine-tasks">
          <p>Review medication administration record from previous shifts and ensure that there are enough med supplies for at least 7 Days.</p>
          <p>Review Documentation from previous shifts and follow up with staff who have missing notes. Ensure that every staff completes ISP data before leaving the home.</p>
          <p>Lead and assign housekeeping tasks throughout the day. Ensure that every task is completed.</p>
          <p>Ensure foods are labeled and dispose of all expired foods.</p>
          <p>Discuss and schedule daily activities with residents and other staff.</p>
        </div>
        <button className="custom-button">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default DailyRoutineChecklist;
