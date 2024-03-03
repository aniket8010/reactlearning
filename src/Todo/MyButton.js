import React from "react";

export const MyButton = (props) => {
  switch (props.color) {
    case "cyan":
      return (
        <button
          style={{
            color: "#6CD1D2",
            fontSize: 14,
            border: "1px solid #6CD1D2",
          }}
          className="rounded-pill px-3"
        >
          {props.title}
        </button>
      );
    case "warning-light":
      return (
        <button
          style={{
            color: "#FF9900",
            fontSize: 14,
            border: "1px solid #FF9900",
          }}
          className="rounded-pill px-3"
        >
          {props.title}
        </button>
      );
    default:
      return (
        <button
          style={{
            background: "#FF9900",
            fontSize: 14,
            border: "1px solid #FF9900",
          }}
          className="text-white rounded-pill px-2"
        >
          {props.title}
        </button>
      );
  }
};
