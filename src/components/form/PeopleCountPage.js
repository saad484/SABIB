import React, { useContext, useState } from "react";
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
    setFormData((prevData) => ({
      ...prevData,
      peopleCount: peopleCount,
    }));
    setCurrentPage(12); // Assuming 12 is the index of the next page
  };

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
      
    </div>
  );
}

export default PeopleCountPage;
