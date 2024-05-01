import React, { useContext, useState } from "react";
import classes from "./css/Form.module.css";
import FormContext from "../form/store/form-context";
import InputSlider from "react-input-slider";

function FloorsAndBathroomsPage() {
  const { formData, setFormData, setCurrentPage } = useContext(FormContext);
  const [floors, setFloors] = useState(formData.floors || 1); // State variable for number of floors
  const [bathrooms, setBathrooms] = useState(formData.bathrooms || 1); // State variable for number of bathrooms

  // Function to handle changing the number of floors
  const handleFloorsChange = (value) => {
    setFloors(value);
  };

  // Function to handle changing the number of bathrooms
  const handleBathroomsChange = (value) => {
    setBathrooms(value);
  };

  // Function to handle the click of the Next button
  const handleNextClick = () => {
    setFormData((prevData) => ({
      ...prevData,
      floors: floors,
      bathrooms: bathrooms,
    }));
    setCurrentPage(8); // Assuming 8 is the index of the next page
  };

  return (
    <div className={classes.container}>
      <h1>How many floors are there?</h1>
      <input
        type="number"
        value={floors}
        onChange={(e) => handleFloorsChange(parseInt(e.target.value))}
        min={1}
        className="form-control mb-4"
      />

      <h1>How many bathrooms are there?</h1>
      <div className="mb-4">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ marginRight: "10px" }}>Bathrooms: {bathrooms}</span>
          <InputSlider
            axis="x"
            x={bathrooms}
            xmin={1}
            xmax={5} // Assuming maximum 5 bathrooms
            onChange={({ x }) => handleBathroomsChange(x)}
            styles={{
              track: {
                backgroundColor: "#ddd",
                height: "10px",
              },
              active: {
                backgroundColor: "#0071be",
                height: "10px",
              },
              thumb: {
                width: "20px",
                height: "20px",
                marginTop: "-5px",
                backgroundColor: "#0071be",
              },
            }}
          />
        </div>
      </div>


    </div>
  );
}

export default FloorsAndBathroomsPage;
