import React from 'react';
import './ChoresDetailsSheet.css'



const chores = [
  'Sweep and Mop kitchen and dining area',
  'Wash bathroom rugs',
  'Vacuum living room',
  'Vacuum hallways and stairs',
  'Vacuum Client\'s bedroom',
  'Mop & Sweep hallways and stairs',
  'Mop & Sweep living room',
  'Mop & Sweep client\'s bedroom',
  'Mop & sweep bathrooms',
  'Clean toilette, bathtub sink and Mirror',
  'Clean oven and stovetop',
  'Wash dishes',
  'Organize person\'s bedroom (change bedsheet, fold clothes)',
  'Wipe down tables, shelves, chairs and any other furniture',
  'Clean all Windows with Windex',
  'Take trash out',
  'Clean inside Microwave',
  'Wipe down refrigerator',
  'Disinfect all door knobs with disinfectant',
  'Landscape inspection (pick up debris)',
  'Oil Check in basement',
  'Food expiration check',
];

const ChoresDetailsSheet: React.FC = () => {
  return (
    <div className="form-card">
      <h2>Chores Details Sheet</h2>
      <span className='greenLine'></span>

      <form className="employee-form">
        <div className="form-group">
          <label>Program Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Person Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Shift</label>
          <input type="text" />
        </div>

        <h3>List</h3>
        <span className='greenLine2'></span>

        <div className="chores-list">
          {chores.map((chore, index) => (
            <div key={index} className="form-group checkbox-group">
              <input type="checkbox" id={`chore-${index}`} />
              <label htmlFor={`chore-${index}`}>{chore}</label>
            </div>
          ))}
        </div>

        <div className="form-group">
          <label>Completed by</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Person</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Staff Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Initial</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Supervisor Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Signature and Date</label>
          <input type="text" />
        </div>

        <button className="custom-button">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default ChoresDetailsSheet;
