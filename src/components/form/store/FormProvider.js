import React, { useState } from "react";
import FormContext from "./form-context";

function FormProvider({ children }) {
  // Define default data and validation states for each page
  const defaultDataState = {
    type: "",
    usage: "", // Example field on TypeOfLocation page
    nickname: "", // Example field on NicknamePage page
    address: "", // Example field on LocationAddressPage page
    city: "", // Example field on LocationAddressPage page
    region: "", // Example field on LocationAddressPage page
    postalCode: "", // Example field on LocationAddressPage page
    size: "", // Example field on LocationSizePage page
    floors: "", // Example field on FloorsAndBathroomsPage page
    bathrooms: "", // Example field on FloorsAndBathroomsPage page
    appliances: [], // Example field on ApplianceAndAmenitiesPage page
    amenities: [], // Example field on ApplianceAndAmenitiesPage page
    peopleCount: 0, // Example field on PeopleCountPage page
  };

  const defaultValidationState = {
  
    type: false,
    usage: false,
    nickname: false,
    address: false,
    city: false,
    region: false,
    postalCode: false,
    size: false,
    floors: false,
    bathrooms: false,
    appliances: false,
    amenities: false,
    peopleCount: false,
  };

  const [page, setPage] = useState(1);
  const [finalData, setFinalData] = useState([]);
  const [formData, setFormData] = useState(defaultDataState);
  const [validation, setValidation] = useState(defaultValidationState);

  const validate = (a) => Object.values(a).reduce((sum, next) => sum && next, true);


  const resetDataState = () => {
    setFormData(defaultDataState);
    setValidation(defaultValidationState);
  };

  const setCurrentPage = (val) => {
    setPage(val);
  };

  const initialValue = {
    formData,
    page,
    numOfPages: 9,
    finalData,
    validation,
    setCurrentPage,
    setFormData,
    resetDataState,
    setFinalData,
    setValidation,
    validate,
  };

  return <FormContext.Provider value={initialValue}>{children}</FormContext.Provider>;
}

export default FormProvider;
