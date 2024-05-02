import React, { useContext, useState, useEffect } from "react";
import classes from "./css/Form.module.css";
import FormContext from "../form/store/form-context";

function ApplianceAndAmenitiesPage() {
  const { formData, setFormData, setCurrentPage } = useContext(FormContext);
  const [selectedIndoorOptions, setSelectedIndoorOptions] = useState([]);
  const [selectedOutdoorOptions, setSelectedOutdoorOptions] = useState([]);

  // Define indoor and outdoor options
  const indoors = [
    "Bathtub",
    "Dishwasher",
    "Hot Tub",
    "Refrigerator with Ice Maker",
    "Washer/Dryer",
  ];

  const outdoors = [
    "Swimming Pool",
    "Swimming Pool with auto Pool Filter",
    "Hot Tub",
    "Fountain",
    "Pond",
  ];

  // Function to handle selecting indoor options
  const handleIndoorOptionSelect = (option) => {
    const updatedIndoorOptions = selectedIndoorOptions.includes(option)
      ? selectedIndoorOptions.filter((item) => item !== option)
      : [...selectedIndoorOptions, option];
    setSelectedIndoorOptions(updatedIndoorOptions);
  };

  // Function to handle selecting outdoor options
  const handleOutdoorOptionSelect = (option) => {
    const updatedOutdoorOptions = selectedOutdoorOptions.includes(option)
      ? selectedOutdoorOptions.filter((item) => item !== option)
      : [...selectedOutdoorOptions, option];
    setSelectedOutdoorOptions(updatedOutdoorOptions);
  };

  // Set the initial values of selected options when the component mounts
  useEffect(() => {
    // Retrieve the selected indoor and outdoor options from formData and set them as the initial states
    setSelectedIndoorOptions(formData.selectedIndoorOptions || []);
    setSelectedOutdoorOptions(formData.selectedOutdoorOptions || []);
  }, []);

  // Function to handle navigating to the next page
  const handleNextClick = () => {
    // Update formData with the selected options
    setFormData((prevData) => ({
      ...prevData,
      selectedIndoorOptions,
      selectedOutdoorOptions,
    }));

    // Move to the next page
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={classes.container}>
      <h1>Appliance and Amenities</h1>
      <div>
        <h2>Indoors:</h2>
        {indoors.map((option) => (
          <div key={option}>
            <input
              type="checkbox"
              id={option}
              checked={selectedIndoorOptions.includes(option)}
              onChange={() => handleIndoorOptionSelect(option)}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
      <div>
        <h2>Outdoors:</h2>
        {outdoors.map((option) => (
          <div key={option}>
            <input
              type="checkbox"
              id={option}
              checked={selectedOutdoorOptions.includes(option)}
              onChange={() => handleOutdoorOptionSelect(option)}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
      <button className="button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
}

export default ApplianceAndAmenitiesPage;
