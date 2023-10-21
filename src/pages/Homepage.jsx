import { useReducer, useState } from "react";
import FormOne from "../components/FormOne";
import FormSecond from "../components/FormSecond";
import FormThird from "../components/FormThird";
import SuccessPopup from "../components/SuccessPopup";
import PropTypes from "prop-types";

Homepage.propTypes = {
  setSubmittedData: PropTypes.func.isRequired,
};

function Homepage({ setSubmittedData }) {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmitForm = () => {
    const formData = {
      fname,
      lname,
      email,
      contact,
      gender,
      learnFrontend,
      learnBackend,
    };

    setSubmittedData((prevData) => [...prevData, formData]);

    dispatch({ type: "RESET" });
    setShowSuccessPopup(true);
    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 3000);
  };

  const initialState = {
    fname: "",
    lname: "",
    email: "",
    contact: "",
    gender: "",
    learnFrontend: false,
    learnBackend: false,
    tc: false,
    step: 1,
    errors: {
      fname: "",
      lname: "",
      email: "",
      form: "",
      contact: "",
      gender: "",
      learn: "",
    },
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validateStep = (state) => {
    if (state.step === 1) {
      if (!state.fname.trim()) {
        state.errors.fname = "First name is required";
        return false;
      }
      if (!state.lname.trim()) {
        state.errors.lname = "Last name is required";
        return false;
      }
      if (!validateEmail(state.email)) {
        state.errors.email = "Invalid email address";
        return false;
      }
    }
    if (state.step === 2) {
      if (!state.contact) {
        state.errors.contact = "Contact is required";
        return false;
      }
      // Validate that contact contains exactly 10 digits
      const contactRegex = /^\d{10}$/;
      if (!contactRegex.test(state.contact)) {
        state.errors.contact = "Contact must be a 10-digit number";
        return false;
      }
      if (!state.gender) {
        state.errors.gender = "Gender is required";
        return false;
      }
      if (!state.learnFrontend && !state.learnBackend) {
        state.errors.learn = "Select at least one option";
        return false;
      }
    }

    return true;
  };

  const stepCount = (state, stepAction) => {
    if (stepAction === "next" && state.step < 3) {
      return state.step + 1;
    } else if (stepAction === "prev" && state.step > 1) {
      return state.step - 1;
    } else {
      return state.step;
    }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "STEP":
        if (validateStep(state)) {
          return {
            ...state,
            step: stepCount(state, action.payload),
            errors: {},
          };
        } else {
          return {
            ...state,
          };
        }
      case "CHANGE":
        return {
          ...state,
          [action.payload]: action.value,
        };
      case "RESET":
        return {
          ...initialState,
        };
      default:
        return state;
    }
  };

  const [
    {
      fname,
      lname,
      email,
      contact,
      gender,
      learnFrontend,
      learnBackend,
      tc,
      step,
      errors,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE", payload: name, value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    dispatch({ type: "CHANGE", payload: name, value: checked });
  };

  return (
    <div className="container">
      {showSuccessPopup && <SuccessPopup />}

      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <div className="main">
        <div className="content">
          {step === 1 && (
            <FormOne
              fname={fname}
              lname={lname}
              email={email}
              errors={errors}
              handleChange={handleChange}
            />
          )}
          {step === 2 && (
            <FormSecond
              contact={contact}
              gender={gender}
              learnFrontend={learnFrontend}
              learnBackend={learnBackend}
              errors={errors}
              handleChange={handleChange}
              handleCheckboxChange={handleCheckboxChange}
            />
          )}
          {step === 3 && (
            <FormThird tc={tc} handleCheckboxChange={handleCheckboxChange} />
          )}
        </div>
      </div>
      <div className="buttons">
        <button
          onClick={() => dispatch({ type: "STEP", payload: "prev" })}
          className={step === 1 ? "disable-btn" : ""}
        >
          Previous
        </button>
        <button
          disabled={step === 3 ? !tc : false}
          id={step === 3 && !tc ? "disabled-submit-btn" : ""}
          onClick={() => {
            if (step === 3) {
              handleSubmitForm();
              dispatch({ type: "RESET" });
            } else {
              dispatch({ type: "STEP", payload: "next" });
            }
          }}
        >
          {step === 3 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Homepage;
