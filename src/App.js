import "./App.css";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <div className="heading">CALCULATOR</div>
      <input value={value} type="text" className="inputfield" />

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
            value="1"
            className="btn-field"
          >
            2
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="1"
            className="btn-field"
          >
            3
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="1"
            className="btn-field"
          >
            C
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="1"
            className="btn-field"
          >
            4
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="1"
            className="btn-field"
          >
            5
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="1"
            className="btn-field"
          >
            6
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="1"
            className="btn-field"
          >
            +
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="1"
            className="btn-field"
          >
            7
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="1"
            className="btn-field"
          >
            8
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="1"
            className="btn-field"
          >
            9
          </button>
        </div>
        <div className="row1">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="1"
            className="btn-field"
          >
            X
          </button>
        </div>
        <div className="row1 ">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="1"
            className="btn-field  last-row"
          >
            .
          </button>
        </div>
        <div className="row1   ">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="1"
            className="btn-field  last-row"
          >
            0
          </button>
        </div>
        <div className="row1 ">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="1"
            className="btn-field  last-row"
          >
            =
          </button>
        </div>
        <div className="row1     ">
          <button
            onClick={(e) => setValue(value + e.target.value)}
            value="1"
            className="btn-field    last-row"
          >
            /
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
