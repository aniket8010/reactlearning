import React, { useState } from "react";

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
      <h2
        style={{
          padding: "10px 20px",
          display: "flex",
          background: "red",
          color: "white",
          justifyContent: "center",
        }}
      >
        Prescription Refill Form
      </h2>
      <form
        style={{
          border: "2px solid red",
          padding: "40px",
          borderRadius: "20px",
          background: "cyan",
          width: "33%",
          margin: "auto",
        }}
        onSubmit={onSubmit}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <label
            style={{
              marginRight: "20px",
              fontSize: "25px",
              display: "flex",
              alignItems: "center",
            }}
            htmlFor="firstName"
          >
            First Name :-
          </label>
          <input
            style={{ borderRadius: "10px", width: "300px" }}
            onChange={onChange}
            type="text"
            id="firstName"
            name="firstname"
          />{" "}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <label
            style={{
              marginRight: "20px",
              fontSize: "25px",
              display: "flex",
              alignItems: "center",
            }}
            htmlFor="lastName"
          >
            Last Name :-
          </label>
          <br />
          <input
            style={{ borderRadius: "10px", width: "300px" }}
            onChange={onChange}
            type="text"
            id="lastName"
            name="lastname"
          />
          <br />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              padding: "8px 25px",
              borderRadius: "10px",
              fontSize: "17px",
              cursor: "pointer",
              background: "green",
              color: "white",
            }}
          >
            Submit
          </button>
        </div>
      </form>
      <span style={{ fontSize: "25px" }}>First Name is ={data.firstname}</span>
      <br />
      <span style={{ fontSize: "25px" }}>Last Name is ={data.lastname}</span>
    </>
  );
};
