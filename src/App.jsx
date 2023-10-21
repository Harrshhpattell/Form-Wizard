import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Homepage from "./pages/Homepage";
import DetailsPage from "./pages/DetailsPage";
import { useState } from "react";

function App() {
  const [submittedData, setSubmittedData] = useState([]);
  console.log(submittedData);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Form-Wizard"
          element={<Homepage setSubmittedData={setSubmittedData} />}
        />
        <Route
          path="/Form-Wizard/details"
          element={<DetailsPage submittedData={submittedData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
