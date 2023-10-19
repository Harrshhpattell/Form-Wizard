import "./form.css";
import PropTypes from "prop-types";

FormOne.propTypes = {
  fname: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default function FormOne({ fname, handleChange }) {
  return (
    <div className="firststep">
      <h1>Your details</h1>
      <hr></hr>
      <div className="form-field">
        <label>First Name</label>
        <input
          type="text"
          name="fname"
          value={fname}
          onChange={handleChange}
          className="inputs"
        ></input>
      </div>
      <div className="form-field">
        <label>Last Name</label>
        <input
          type="text"
          name="lname"
          onChange={handleChange}
          className="inputs"
        ></input>
      </div>
      <div className="form-field">
        <label>Email Id</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="inputs"
        ></input>
      </div>
    </div>
  );
}
