import React, { useState } from "react";

export default function Textbox(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to LowerCase", "success");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleRemoveSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Removed spaces", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="conatiner" style = {{color: props.mode=='dark'?'white':'#124272'}}>
        <h5>{props.title}</h5>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style = {{backgroundColor: props.mode=='dark'?'grey':'white', color: props.mode=='dark'?'white':'#124272'}}
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
      <div className="container" style = {{color: props.mode=='dark'?'white':'#124272'}}>
        <hr/>
        <h5> Your text Summary</h5>
        <p> {text.split(" ").length -1} Words and {text.length} characters</p>
        <h5>Preview</h5>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>

    </>
  );
}

// Created th first intercative react app whcih can convert
// text to upper case an dlower case and also can add different functions to
// this file
