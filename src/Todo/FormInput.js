import React, { useState } from "react";
import { MyButton } from "./MyButton";
import { List } from "./List";
const initialState = {
  name: "",
  description: "",
};
export const FormInput = () => {
  const [values, setValues] = useState(initialState);
  const [data, setData] = useState([]);

  //create a function to get the values of input change
  const onchange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  //create a final data submit
  function onsubmit(e) {
    e.preventDefault();
    if (values?.id === 0 || values?.id) {
      // update
      data[values?.id] = values;
      setData([...data]);
    } else {
      setData([...data, values]);
    }
    setValues(initialState);
    // console.log(values)
  }
  return (
    <>
      <form
        onSubmit={onsubmit}
        className="a_todo_form p-2 row align-items-center"
      >
        <div className="col-12 col-md-4">
          <label className="text-white" htmlFor="name">
            Name
          </label>
          <br />
          <input
            required
            onChange={onchange}
            value={values.name}
            type="text"
            id="name"
            name="name"
            className="rounded-3 border-0 w-100"
          />
        </div>
        <div className="col-12 col-md-4">
          <label className="text-white" htmlFor="description">
            Description
          </label>{" "}
          <br />
          <input
            required
            onChange={onchange}
            value={values.description}
            type="text"
            id="description"
            name="description"
            className="rounded-3 border-0 w-100"
          />
        </div>
        <div className="col-12 col-md-2 ms-auto">
          <MyButton
            title={`${values?.id === 0 || values?.id ? "Update" : "Add"} Todos`}
          />
        </div>
      </form>
      <List
        data={data}
        setData={setData}
        setValues={setValues}
        editId={values?.id}
      />
    </>
  );
};
