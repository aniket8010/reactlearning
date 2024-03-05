import React from "react";
import { MyButton } from "./MyButton";

export const List = (props) => {
  function deleteHandler(id) {
    props.setData(
      props.data.filter((ele, index) => {
        return id !== index;
      })
    );
  }
  function completeHandler(id) {
    const newData = props.data[id];
    newData["isLineThrough"] = true;
    props.setData([...props.data]);
  }

  function editHandler(id) {
    const newData = props.data[id];
    props.setValues({ ...newData, id: id });
  }
  if (props.data?.length === 0) return null;
  return (
    <div className="a_list mt-3 row p-2">
      {props.data.map((ele, index) => {
        return (
          <div key={index} className="row">
            <div
              style={{
                textDecoration: ele?.isLineThrough ? "line-through" : "none",
              }}
              className={`col-12 col-md-8 ${
                index === props?.editId ? "text-danger" : ""
              }`}
            >
              <h3 style={{ color: "#FF9900" }} className="m-0">
                {ele?.name}
              </h3>
              <p className="text-white">{ele?.description}</p>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-end align-items-center gap-2">
              <div onClick={() => editHandler(index)}>
                <MyButton title="Edit" color="green" />
              </div>
              <div onClick={() => completeHandler(index)}>
                <MyButton title="Complete" color="cyan" />
              </div>
              <div onClick={() => deleteHandler(index)}>
                <MyButton title="Delete" color="warning-light" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
