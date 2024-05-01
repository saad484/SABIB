import React, { useContext, useState } from "react";
import classes from "./css/Form.module.css";
import FormContext from "../form/store/form-context";

function NicknamePage() {
  const [nickname, setNickname] = useState(""); 
  const { formData, setFormData, validation, setValidation, setCurrentPage } = useContext(FormContext);

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };


  return (
    <div className={classes.container}>
      <h1>Give a location nickname</h1>
      <div className="mb-3">
        <label htmlFor="nicknameInput" className="form-label">
          Nickname
        </label>
        <input
          type="text"
          className={`form-control ${validation.nickname === false ? "is-invalid" : ""}`}
          id="nicknameInput"
          value={nickname}
          onChange={handleNicknameChange}
        />
        {validation.nickname === false && <div className="invalid-feedback">Nickname should not be empty</div>}
      </div>
    </div>
  );
}

export default NicknamePage;