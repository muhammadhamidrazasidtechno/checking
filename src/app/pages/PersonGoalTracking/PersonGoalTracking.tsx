import React from 'react';
import './PersonGoalTracking.css'

const PersonGoalTracking: React.FC = () => {
  return (
    <div className="form-card">
      <h2>Person Goal Tracking</h2>
      <span className='greenLine'></span>
      <form className="person-goal-form">
        <div className="form-group">
          <label>Person's Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Program Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Goal Scheduled for the Day</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Goal Completed?</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="goal-completed" value="yes" /> Yes
            </label>
            <label>
              <input type="radio" name="goal-completed" value="no" /> No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>If completed, what was the person's feedback/comments?</label>
          <textarea rows={3}></textarea>
        </div>

        <div className="form-group">
          <label>If not completed, was an alternative option offered?</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="alternative-option" value="yes" /> Yes
            </label>
            <label>
              <input type="radio" name="alternative-option" value="no" /> No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>If yes, what was the option offered?</label>
          <textarea rows={3}></textarea>
        </div>

        <div className="form-group">
          <label>If no alternative was offered, please explain why or comment.</label>
          <textarea rows={3}></textarea>
        </div>

        <div className="form-group">
          <label>Supervisor Name</label>
          <input type="text" />
        </div>

        <button className="custom-button">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default PersonGoalTracking;
