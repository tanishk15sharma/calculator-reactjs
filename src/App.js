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
          <button onClick={(e) => setValue(value + e.target.value)} value="1">
            1
          </button>
        </div>

        <div className="row1">
          <button onClick={(e) => setValue(value + e.target.value)} value="1">
            2
          </button>
        </div>
        <div className="row1">
          <button onClick={(e) => setValue(value + e.target.value)} value="1">
            3
          </button>
        </div>
        <div className="row1">
          <button onClick={(e) => setValue(value + e.target.value)} value="1">
            4
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
