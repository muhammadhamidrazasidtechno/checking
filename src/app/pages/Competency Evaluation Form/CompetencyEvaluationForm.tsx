import React, { useState } from "react";
import "./CompetencyEvaluationForm.css";
import { createUser } from "../../modules/apps/user-management/users-list/core/apiRequests";

const CompetencyEvaluationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    competencyRating: "",
    comments: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Call createUser function with the required parameters
      const response = await createUser(
        formData,
        "CompetencyEvaluationFormRouter/add"
      );
      console.log(response); // You can handle the response as needed
      setSuccess(true);
      setFormData({ competencyRating: "", comments: "" }); // Reset form after submission
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-card">
      <h2>Competency Evaluation</h2>
      <span className="greenLine"></span>

      <form className="competency-evaluation-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Depending on position, some competencies may be more relevant than
            others.
          </label>
          <select
            name="competencyRating"
            value={formData.competencyRating}
            onChange={handleChange}
            required
          >
            <option value="">Select rating</option>
            <option
              value="Performance is consistently superior and
              significantly exceeds position requirements."
            >
              Performance is consistently superior and significantly exceeds
              position requirements.
            </option>
            <option
              value="Performance frequently exceeds position
              requirements."
            >
              Performance frequently exceeds position requirements.
            </option>
            <option
              value="Performance consistently meets position
              requirements."
            >
              Performance consistently meets position requirements.
            </option>
            <option
              value="Performance meets some, but not all position
              requirements."
            >
              Performance meets some, but not all position requirements.
            </option>
            <option
              value="Performance consistently fails to meet minimum
              position requirements; employee lacks skills required or fails to
              utilize necessary skills."
            >
              Performance consistently fails to meet minimum position
              requirements; employee lacks skills required or fails to utilize
              necessary skills.
            </option>
            <option
              value="Employee has not been in position long
              enough to have demonstrated the essential elements of the position
              and will be reviewed at a later agreed upon date."
            >
              Employee has not been in position long enough to have demonstrated
              the essential elements of the position and will be reviewed at a
              later agreed upon date.
            </option>
          </select>
        </div>
        <div className="form-group">
          <label>Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Enter any comments here"
            rows={5}
          />
        </div>
        <button type="submit" className="custom-button" disabled={loading}>
          {loading ? "Submitting..." : <span>Submit</span>}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && (
          <p style={{ color: "green" }}>Form submitted successfully!</p>
        )}
      </form>
    </div>
  );
};

export default CompetencyEvaluationForm;
