import React, { useState } from "react";

const DistanceConvertor = () => {
  const [inputDistance, setInputDistance] = useState(0);
  const [outputDistance, setoutputDistance] = useState(0);
  const [inputUnit, setSelectedFromUnit] = useState("kilometers");
  const [outputUnit, setSelectedToUnit] = useState("miles");

  const HandleInput = (e) => {
    setInputDistance(e.target.value);
  };
  const HandleInputChange = (e) => {
    setSelectedFromUnit(e.target.value);
  };
  const HandleOutputChange = (e) => {
    setSelectedToUnit(e.target.value);
  };

  const HandleAnswer = (e) => {
    setoutputDistance(e.target.value);
  };

  return (
    <div>
      <div>Distance</div>
      <div>
        <label>Select the option: </label>
        <input type="number" value={inputDistance} onChange={HandleInput} />
      </div>
      <div>
        <select value={inputUnit} onChange={HandleInputChange}>
          <option value="kilometres">Kilometres</option>
          <option value="centimetres">Centimetres</option>
          <option value="miles">Miles</option>
          <option value="decimetres">Decimetres</option>
        </select>
      </div>
      <div>
        <label>Distance After Conversion: </label>
        <input type="number" value={outputDistance} onChange={HandleAnswer} />
        <div>
          <select value={outputUnit} onChange={HandleOutputChange}>
            <option value="kilometres">Kilometres </option>
            <option value="centimetres">Centimetres</option>
            <option value="miles">Miles</option>
            <option value="decimetres">Decimetres</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DistanceConvertor;
