import React from "react";
import "./TodoMain.css";
import { FormInput } from "./FormInput";
export const TodoMain = () => {
  return (
    <>
      <div className="a_todo_main">
        <div className="a_todo_main_container my-5">
          <div className="a_sub_container">
            <h4 className="text-center text-white">My Todos</h4>
            <FormInput/>
          </div>
        </div>
      </div>
    </>
  );
};
