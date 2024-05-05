import React from "react";

function ReactElem() {
  const text = "Click";

  // реакт элемент
  const elem = <h2>Hello world!</h2>;

  // реакт элемент
  const elem2 = React.createElement(
    "h2",
    {
      className: "Classes",
      color: "red",
    },
    "Hello world!"
  );

  // реакт элемент
  const elem3 = (
    <div>
      <h2>Hello world</h2>
      <input type="text" />
      <button
        style={{
          color: "blue",
          fontSize: "20px",
          marginLeft: "20px",
        }}
      >
        {text}
      </button>
    </div>
  );

  return (
    <div>
      {elem}
      {elem2}
      {elem3}
    </div>
  )
}

export default ReactElem;
