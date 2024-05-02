import React, { useContext, useState, useEffect } from "react";
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

  // Function to handle navigation to the next page
  const handleNextClick = () => {
    // Update form data with selected number of floors and bathrooms
    setFormData((prevData) => ({
      ...prevData,
      floors: floors,
      bathrooms: bathrooms
    }));
    // Proceed to the next page
    setCurrentPage(page => page + 1);
  };

  // Set the initial values of floors and bathrooms when the component mounts
  useEffect(() => {
    // Retrieve the floors and bathrooms values from formData and set them as the initial states
    setFloors(formData.floors || 1);
    setBathrooms(formData.bathrooms || 1);
  }, []);

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

      <button className="button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
}

export default FloorsAndBathroomsPage;
