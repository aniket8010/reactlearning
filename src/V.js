import React from "react";

export const V = (props) => {
  return (
    <>
      <span>First Name is = {props.firstname}</span> <br />
      <span>Last Name is ={props.lastname}</span> <br />
      <span>Email is ={props.email}</span><br />
      <span>Mobile Number is ={props.number}</span>
    </>
  );
};
