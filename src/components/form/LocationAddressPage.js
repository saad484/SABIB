import React, { useContext, useState } from "react";
import classes from "./css/Form.module.css";
import FormContext from "../form/store/form-context";

function LocationAddressPage() {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const { formData, setFormData, setCurrentPage } = useContext(FormContext);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };

  const handleNextClick = () => {
    setCurrentPage(6); // Assuming 6 is the index of the next page
    setFormData((prevData) => ({
      ...prevData,
      address,
      city,
      region,
      postalCode,
    }));
  };

  return (
    <div className={classes.container}>
      <h1>Add Location Address</h1>
      <div className="mb-3">
        <label htmlFor="addressInput" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="addressInput"
          value={address}
          onChange={handleAddressChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cityInput" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="cityInput"
          value={city}
          onChange={handleCityChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="regionInput" className="form-label">
          Region
        </label>
        <input
          list="morocco-regions"
          className="form-control"
          name="region"
          value={region}
          onChange={handleRegionChange}
          placeholder="Type or select a region"
        />
        <datalist id="morocco-regions">
          <option value="Rabat-Salé-Kénitra" />
          <option value="Casablanca-Settat" />
          <option value="Tanger-Tétouan-Al Hoceima" />
          <option value="Marrakech-Safi" />
          <option value="Fès-Meknès" />
          <option value="Oriental" />
          <option value="Souss-Massa" />
          <option value="Draa-Tafilalet" />
          <option value="Béni Mellal-Khénifra" />
          <option value="Guelmim-Oued Noun" />
          <option value="Laâyoune-Sakia El Hamra" />
          <option value="Dakhla-Oued Ed-Dahab" />
        </datalist>
      </div>
      <div className="mb-3">
        <label htmlFor="postalCodeInput" className="form-label">
          Postal Code
        </label>
        <input
          type="text"
          className="form-control"
          id="postalCodeInput"
          value={postalCode}
          onChange={handlePostalCodeChange}
        />
      </div>
      
    </div>
  );
}

export default LocationAddressPage;
