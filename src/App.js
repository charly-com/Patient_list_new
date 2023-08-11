import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatientList from "../src/components/patientList"
import Patient from "../src/components/patient"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PatientList />} />
        <Route path="/patient/:id" element={<Patient />} />
      </Routes>
    </Router>
   
  );
}

export default App;
