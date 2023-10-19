import "./form.css";
import PropTypes from "prop-types";

FormSecond.propTypes = {
  contact: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
  learnFrontend: PropTypes.bool,
  learnBackend: PropTypes.bool,
  errors: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
};

export default function FormSecond({
  contact,
  gender,
  learnFrontend,
  learnBackend,
  errors,
  handleChange,
}) {
  return (
    <div className="secondstep">
      <h3>More about</h3>
      <hr></hr>
      <div className="form-field">
        <label>Contact</label>
        <input
          type="text"
          name="contact"
          value={contact}
          onChange={handleChange}
          className="inputs"
        ></input>
        {errors.contact && (
          <div className="error-message">{errors.contact}</div>
        )}
      </div>
      <div className="form-field">
        <label>Gender</label>
        <input
          type="radio"
          value="male"
          name="gender"
          checked={gender === "male"}
          onChange={handleChange}
        ></input>
        Male
        <input
          type="radio"
          value="female"
          name="gender"
          checked={gender === "female"}
          onChange={handleChange}
        ></input>
        Female
        {errors.gender && <div className="error-message">{errors.gender}</div>}
      </div>
      <div className="form-field">
        <label>Want to Learn..</label>
        <input
          type="checkbox"
          value="frontend"
          name="learnFrontend"
          checked={learnFrontend}
          onChange={handleChange}
        ></input>
        Frontend
        <input
          type="checkbox"
          value="backend"
          name="learnBackend"
          checked={learnBackend}
          onChange={handleChange}
        ></input>
        Backend
        {errors.learn && <div className="error-message">{errors.learn}</div>}
      </div>
    </div>
  );
}
