import { useReducer } from "react";
import "./index.css";
import FormOne from "./components/FormOne";

function App() {
  // const [step, setStep] = useState(1);

  const initialState = {
    fname: "",
    // lname: "",
    // email: "",
    step: 1,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          [action.payload]: action.value,
        };
    }
  };

  const [{ fname, step }, dispatch] = useReducer(reducer, initialState);

  // function prebtn() {
  //   if (step > 1) setStep((s) => s - 1);
  // }

  // function nextbtn() {
  //   if (step < 3) setStep((s) => s + 1);
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE", payload: name, value });
  };

  return (
    <div className="container">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <div className="main">
        <div className="content">
          {step === 1 && <FormOne fname={fname} handleChange={handleChange} />}
          {/* {step === 2 && <SecondStep />}
          {step === 3 && <ThirdStep />} */}
        </div>
      </div>
      <div className="buttons">
        {/* <button onClick={prebtn} className={step === 1 ? "disable-btn" : ""}>
          Previous
        </button>
        <button onClick={nextbtn}>Next</button> */}
      </div>
    </div>
  );
}

export default App;
