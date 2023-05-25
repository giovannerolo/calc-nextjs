import React from "react";

import { useEffect, useState } from "react";
import Input from "./Input/Input";
import Button from "./Button/Button";

const Calc = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = +firstNumber + +currentNumber;
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("");
    } else {
      const sum = +firstNumber - +currentNumber;
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMultiNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("x");
    } else {
      const sum = +firstNumber * +currentNumber;
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleDivNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const sum = +firstNumber / +currentNumber;
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleModNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("%");
    } else {
      const sum = +firstNumber % +currentNumber;
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  // const handleSqrtNumbers = () => {
  //   if (firstNumber === "0") {
  //     setFirstNumber(String(currentNumber));
  //     setCurrentNumber("0");
  //     setOperation("√");
  //   } else {
  //     const sum = +firstNumber % +currentNumber;
  //     setCurrentNumber(String(sum));
  //     setOperation("");
  //   }
  // };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "x":
          handleMultiNumbers();
          break;
        case "/":
          handleDivNumbers();
          break;
        case "%":
          handleModNumbers();
          break;
        case "√":
          handleSqrtNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="w-full h-screen bg-slate-100 flex flex-col items-center justify-center">
      <Input value={currentNumber} />
      <div>
        <div>
          <Button label="√" onClick={() => {}} />
          <Button label="x" onClick={handleMultiNumbers} />
          <Button label="/" onClick={handleDivNumbers} />
          <Button label="c" onClick={handleOnClear} />
          <Button label="=" onClick={handleEquals} />
        </div>
        <div>
          <Button label="^2" onClick={() => {}} />
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleMinusNumbers} />
        </div>
        <div>
          <Button label="%" onClick={handleModNumbers} />
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </div>
        <div>
          <Button label="." onClick={() => handleAddNumber(".")} />
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
        </div>
      </div>
    </div>
  );
};

export default Calc;
