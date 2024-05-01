import React, { useContext } from "react";
import PaginateBar from "./PaginateBar";
import classes from "./css/LandingFormPage.module.css";
import TypeOfLocation from "./TypeOfLocation";
import CongratzPage from "./CongratzPage";
import FormContext from "../form/store/form-context";
import './css/global.css';
import UsagePage from "./UsagePage";
import NicknamePage from "./NicknamePage";
import LocationAddressPage from "./LocationAddressPage";
import LocationSizePage from "./LocationSizePage";
import FloorsAndBathroomsPage from "./FloorsAndBathroomsPage";
import ApplianceAndAmenitiesPage from "./ApplianceAndAmenitiesPage";
import PeopleCountPage from "./PeopleCountPage";

function LandingFormPage() {
  const {
    page,
    setCurrentPage,
    numOfPages,
    formData,
    setFinalData,
    resetDataState,
    validation,
    validate,
  } = useContext(FormContext);

  const handleNextClick = () => {
    // Check if the current page's data is valid
    if (validate(validation)) {
      // Proceed to the next page if the data is valid
      if (page < numOfPages - 1) {
        setCurrentPage(page + 1);
      } else if (page === numOfPages - 1) {
        setFinalData((current) => [...current, formData]);
        resetDataState();
        setCurrentPage(1);
      }
    } else {
      // Display an alert if the form is incomplete
      alert("Your form is incomplete");
    }
  };

  return (
    <div className={classes.form}>
      <PaginateBar />
      <div className="card-form">
        {page === 1 && <TypeOfLocation />}
        {page === 2 && <UsagePage />}
        {page === 3 && <NicknamePage />}
        {page === 4 && <LocationAddressPage />}
        {page === 5 && <LocationSizePage />}
        {page === 6 && <FloorsAndBathroomsPage />}
        {page === 7 && <ApplianceAndAmenitiesPage />}
        {page === 8 && <PeopleCountPage />}
        {page === 9 && <CongratzPage />}
        
        <button className="button" onClick={handleNextClick}>
          {page === numOfPages ? `Launch SABIB` : `Next`}
        </button>
      </div>
    </div>
  );
}


export default LandingFormPage;
