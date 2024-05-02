import React, { useContext, useState, useEffect } from "react";
import classes from "./css/Form.module.css";
import FormContext from "../form/store/form-context";

function PeopleCountPage() {
  const { formData, setFormData, setCurrentPage } = useContext(FormContext);
  const [peopleCount, setPeopleCount] = useState(formData.peopleCount || 1);

  const handleIncrement = () => {
    setPeopleCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (peopleCount > 1) {
      setPeopleCount((prevCount) => prevCount - 1);
    }
  };

  const handleNextClick = () => {
    // Update form data with selected people count
    setFormData((prevData) => ({ ...prevData, peopleCount: peopleCount }));
    // Proceed to the next page
    setCurrentPage(page => page + 1);
  };

  // Set the initial value of peopleCount when the component mounts
  useEffect(() => {
    // Retrieve the peopleCount value from formData and set it as the initial state
    setPeopleCount(formData.peopleCount || 1);
  }, []);

  return (
    <div className={classes.container}>
      <h1>How many people live in this location?</h1>
      <div className={classes.section}>
        <button className={classes.controlButton} onClick={handleDecrement}>
          -
        </button>
        <span className={classes.staticInput}>{peopleCount}</span>
        <button className={classes.controlButton} onClick={handleIncrement}>
          +
        </button>
      </div>
      <button className="button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
}

export default PeopleCountPage;
