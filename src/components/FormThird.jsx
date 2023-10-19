import "./form.css";
import PropTypes from "prop-types";

FormThird.propTypes = {
  tc: PropTypes.bool,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default function FormThird({ tc, handleCheckboxChange }) {
  return (
    <div className="thirdstep">
      <h3>Thanks for joining</h3>
      <hr></hr>
      <div className="form-field">
        <input
          type="checkbox"
          value="tc"
          name="tc"
          checked={tc}
          onChange={handleCheckboxChange}
        ></input>
        I Read all terms and condition.
      </div>
      <div className="form-field">
        <span>Follow me, </span>
        <a href="https://github.com/Harrshhpattell">Click Here</a>
      </div>
    </div>
  );
}
