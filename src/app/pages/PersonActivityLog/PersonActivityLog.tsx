import React from 'react';
import './PersonActivityLog.css';

const PersonActivityLog: React.FC = () => {
  return (
    <div className="form-card">
      <h2>Person Activity Log</h2>
      <span className='greenLine'></span>

      <form className="activity-form">
        <div className="form-group">
          <label>Person's Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Program</label>
          <input type="text" />
        </div>

        <h2>Activity Details</h2>
        <span className='greenLine'></span>

        <div className="form-group">
          <label>Describe the activity here</label>
          <textarea rows={3}></textarea>
        </div>
        <div className="form-group checkbox-group">
          <input type="checkbox" id="completed" />
          <label htmlFor="completed">Completed?</label>
        </div>
        <div className="form-group">
          <label>Time spent</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Staff name</label>
          <input type="text" />
        </div>
        <div className="form-group checkbox-group">
          <input type="checkbox" id="planned" />
          <label htmlFor="planned">Was it planned?</label>
        </div>
        <div className="form-group checkbox-group">
          <input type="checkbox" id="unplanned" />
          <label htmlFor="unplanned">Was it unplanned?</label>
        </div>
        <div className="form-group checkbox-group">
          <input type="checkbox" id="refused" />
          <label htmlFor="refused">Did the person refuse the activity?</label>
        </div>
        <div className="form-group">
          <label>If yes, what was the reason?</label>
          <textarea rows={3}></textarea>
        </div>

        <h2>Additional Activity</h2>
        <span className='greenLine'></span>

        <div className="form-group">
          <label>Describe the activity here</label>
          <textarea rows={3}></textarea>
        </div>
        <div className="form-group checkbox-group">
          <input type="checkbox" id="completed2" />
          <label htmlFor="completed2">Completed?</label>
        </div>
        <div className="form-group">
          <label>Time spent</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Staff name</label>
          <input type="text" />
        </div>
        <div className="form-group checkbox-group">
          <input type="checkbox" id="planned2" />
          <label htmlFor="planned2">Was it planned?</label>
        </div>
        <div className="form-group checkbox-group">
          <input type="checkbox" id="unplanned2" />
          <label htmlFor="unplanned2">Was it unplanned?</label>
        </div>
        <div className="form-group checkbox-group">
          <input type="checkbox" id="refused2" />
          <label htmlFor="refused2">Did the person refuse the activity?</label>
        </div>
        <div className="form-group">
          <label>If yes, what was the reason?</label>
          <textarea rows={3}></textarea>
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

export default PersonActivityLog;
