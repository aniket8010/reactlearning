import React, { useState } from "react";
import "./form.css";
export const Form = () => {
  const [values, setValues] = useState({ firstname: "", lastname: "" });
  const [data, setData] = useState({ firstname: "", lastname: "" });
  //creating a function to get the onChange values from inputs elements

  function onChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }
  function onSubmit(event) {
    event.preventDefault();
    setData(values);
  }

  return (
    <>
      <h2>Prescription Refill Form</h2>
      <form onSubmit={onSubmit}>
        <div className="div_1">
          <label htmlFor="firstName">First Name :-</label>
          <input
            onChange={onChange}
            type="text"
            id="firstName"
            name="firstname"
          />{" "}
        </div>
        <div className="div_2">
          <label htmlFor="lastName">Last Name :-</label>
          <br />
          <input
            onChange={onChange}
            type="text"
            id="lastName"
            name="lastname"
          />
          <br />
        </div>
        <div className="div_3">
          <button>Submit</button>
        </div>
      </form>
      <span>First Name is ={data.firstname}</span>
      <br />
      <span>Last Name is ={data.lastname}</span>
    </>
  );
};
