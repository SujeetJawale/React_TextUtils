import React, { useState } from "react";

export default function Textbox(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleRemoveSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container">
        <h5>{props.title}</h5>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows={8}
          />
        </div>
      </div>
      <div>
      <button className="btn btn-primary btn-sm mx-2"  onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary btn-sm mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary btn-sm mx-2" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary btn-sm mx-2" onClick={handleRemoveSpaces}>
          Remove extra Spaces
        </button>
      </div>
{/* --------------------------------------------------------------------------------------------- */}
      <div className="container">
        <hr/>
        <h5> Your text Summary</h5>
        <p> {text.split(" ").length -1} Words and {text.length} characters</p>
        <h5>Preview</h5>
        <p>{text}</p>
      </div>

    </>
  );
}

// Created th first intercative react app whcih can convert
// text to upper case an dlower case and also can add different functions to
// this file
