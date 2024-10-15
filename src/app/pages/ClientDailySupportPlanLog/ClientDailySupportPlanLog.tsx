import React from 'react';
import './ClientDailySupportPlanLog.css'


const adls = [
  'Bathing/Showering',
  'Toileting',
  'Brushing Teeth',
  'Getting Dressed',
  'Walking around the house',
  'Cooking Meal',
  'Grocery shopping',
  'Completing laundry',
  'Cleaning personal space',
  'Making bed',
];

const ClientDailySupportPlanLog: React.FC = () => {
  return (
    <div className="form-card">
      <h2>Client Daily Support Plan Log</h2>
      <span className='greenLine'></span>

      <form className="employee-form">
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

        <h3>How was the person supported on the following ADLs:</h3>
        <span className='greenLine'></span>
        <div className="adl-list">
          {adls.map((adl, index) => (
            <div key={index} className="form-group radio-group">
              <label className='w-50'>{adl}</label>
              <div className="radio-options w-50">
                <label>
                  <input type="radio" name={`adl-${index}`} value="yes" /> Yes
                </label>
                <label>
                  <input type="radio" name={`adl-${index}`} value="no" /> No
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="form-group">
          <label>Completed By</label>
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

        <h3>Did the person refuse any of the daily support?</h3>
        <span className='greenLine'></span>
        <div className="form-group checkbox-group">
          <input type="checkbox" id="refusal" />
          <label htmlFor="refusal">If yes, what was the reason?</label>
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

export default ClientDailySupportPlanLog;
