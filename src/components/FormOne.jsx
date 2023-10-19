import "./form.css";
import PropTypes from "prop-types";

FormOne.propTypes = {
  fname: PropTypes.string.isRequired,
  lname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  errors: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
};

export default function FormOne({ fname, lname, email, errors, handleChange }) {
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
        {errors.fname && <div className="error-message">{errors.fname}</div>}
      </div>
      <div className="form-field">
        <label>Last Name</label>
        <input
          type="text"
          name="lname"
          value={lname}
          onChange={handleChange}
          className="inputs"
        ></input>
        {errors.lname && <div className="error-message">{errors.lname}</div>}
      </div>
      <div className="form-field">
        <label>Email Id</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="inputs"
        ></input>
        {errors.email && <div className="error-message">{errors.email}</div>}
      </div>
    </div>
  );
}
