import React from "react";

const Button = (props) => (
  <button className="Button" onClick={props.onClick}>
    {props.title}

    {/*language=CSS*/}
    <style jsx>{`
      .Button {
        background-color: #007dff;
        color: white;
        padding: 4px 10px;
        font-size: 14px;
        border: none;
        border-radius: 4px;
      }
    `}</style>
  </button>
);

export { Button };
