import React, { useState } from "react";
import { useParams } from "react-router-dom";
import patients from "../data";

const Patient = () => {
  const { id } = useParams();
  const patient = patients.find((p) => p.id === parseInt(id));

  const [name, setName] = useState(patient.name);
  const [age, setAge] = useState(patient.age);
  const [sex, setSex] = useState(patient.sex);
  const [phone, setPhone] = useState(patient.phone);
  const [email, setEmail] = useState(patient.email);

  const handleUpdate = () => {
    // Implement your update logic here
    console.log("Patient updated:", { id, name, age, sex, phone, email });
  };

  return (
    <div>
      <h1 className="py-5 text-lg">Patient Details</h1>
      <p>ID: {id}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default Patient;