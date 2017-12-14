import React from "react";

const isImportant = title => {
  return title.includes("!");
};
const isYelling = title => {
  return title === title.toUpperCase();
};

const Button = props => (
  <button
    className={`Button ${isImportant(props.title) && "important"} 
      ${isYelling(props.title) && "yelling"}`}
    onClick={props.onClick}
  >
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
      Button.important {
        background-color: red;
      }
      Button.yelling {
        background-color: yellow;
        color: black;
      }
    `}</style>
  </button>
);

export { Button };
