import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    ["AC", "DEL", "%", "/"],
    ["7", "6", "5", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["00", "0", ".", "="]
  ];

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-3 rounded shadow" style={{ width: 300, background: '#fff', borderRadius: '20px' }}>
        <div className="mb-3 p-3 bg-white rounded" style={{ height: "70px", fontSize: "1.5rem", textAlign: "right", border: "1px solid #ccc" }}>
          {input || "0"}
        </div>
        <div className="d-grid gap-2">
          {buttons.map((row, rowIndex) => (
            <div className="d-flex justify-content-between" key={rowIndex}>
              {row.map((btn, i) => (
                <button
                  key={i}
                  className={`btn ${btn === "=" ? "btn-warning rounded-circle" : btn === "%" || btn === "/" || btn === "*" || btn === "-" || btn === "+" ? "text-success" : "btn-light"}`}
                  style={{ width: "60px", height: "60px", fontWeight: "bold" }}
                  onClick={() => handleClick(btn)}
                >
                  {btn}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
