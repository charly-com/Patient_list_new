import React from "react";
import patients from "../data";
import { Link } from "react-router-dom";
import './patientList.css'

const PatientList = () => {
  return (
    <div className="patient-contianer">
      <h1 className="patient-list-header">Patient List</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <Link to={`/patient/${patient.id}`}>{patient.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;