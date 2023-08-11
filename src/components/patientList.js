import React from "react";
import patients from "../data";
import { Link } from "react-router-dom";


const PatientList = () => {
  return (
    <div className="bg-gray-950 flex justify-center items-center min-h-screen p-10">
      <div class="md:w-3/5 w-3/4 px-10 flex flex-col gap-2 p-5 bg-gray-800 text-white">
        <h1 className="py-5 text-lg">Patient List</h1>
        <ul classN="border border-gray-200 rounded overflow-hidden shadow-md">
          {patients.map((patient) => (
            <li
              className="px-4 py-2  bg-white text-sky-900  border-gray-200 "
              key={patient.id}
            >
              <Link to={`/patient/${patient.id}`}>{patient.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientList;
