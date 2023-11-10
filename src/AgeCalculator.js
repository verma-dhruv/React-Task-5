import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const diff = today - birthDate;
    const ageDate = new Date(diff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    setAge(calculatedAge);
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p>Your age is {age} years</p>}
    </div>
  );
};

export default AgeCalculator;
