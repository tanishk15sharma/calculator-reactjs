import "./App.css";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const backspace = () => {
    try {
      setValue(value.slice(0, -1));
    } catch (error) {
      setValue("");
    }
  };

  const calculateValue = () => {
    try {
      setValue(eval(value));
    } catch (error) {
      setValue("Error");
    }
  };

  const clearField = () => {
    setValue("");
  };

  return (
    <div className="container">
      <div className="heading">CALCULATOR</div>
      <input
        value={value}
        type="text"
        className="inputfield"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <div className="rowcontainer">
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="1"
            className="btn-field"
          >
            1
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="2"
            className="btn-field"
          >
            2
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="3"
            className="btn-field"
          >
            3
          </button>
        </div>
        <div className="row1">
          <button onClick={() => backspace()} value="c" className="btn-field">
            C
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="4"
            className="btn-field"
          >
            4
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="5"
            className="btn-field"
          >
            5
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="6"
            className="btn-field"
          >
            6
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="+"
            className="btn-field"
          >
            +
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="7"
            className="btn-field"
          >
            7
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="8"
            className="btn-field"
          >
            8
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="9"
            className="btn-field"
          >
            9
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="*"
            className="btn-field"
          >
            X
          </button>
        </div>
        <div className="row1 ">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="."
            className="btn-field  last-row"
          >
            .
          </button>
        </div>
        <div className="row1   ">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="0"
            className="btn-field  last-row"
          >
            0
          </button>
        </div>
        <div className="row1 ">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="-"
            className="btn-field  last-row"
          >
            -
          </button>
        </div>
        <div className="row1     ">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="/"
            className="btn-field    last-row"
          >
            /
          </button>
        </div>

        <button className="action-btn" onClick={clearField}>
          Clear
        </button>
        <button className="action-btn" onClick={calculateValue}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
