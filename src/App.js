import { useState } from 'react';
import './App.css'

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "*", "-", "+", "DEL", "."];

  const updateCalc = value => {
    if (
      ops.includes(value) && calc === "" ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    } else {
      setCalc(calc + value)
    }

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }


  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  const deleteFn = () => {
    if (calc === "") {
      return;
    } else {
      const value = calc.slice(0, -1)
      setCalc(value)
    }
  }

  const clearFn = () => {
    setCalc("")
    setResult("")
  }


  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => updateCalc(i.toString())}>{i}</button>
      )
    }
    return digits;
  }

  return (
    <div className="container">
      <div className="main">
        <div className="screen-section">
          {result ? <span>({result})</span> : ""}{calc || "0"}
        </div>
        <div className="operator-section">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={clearFn}>C</button>
          <button onClick={deleteFn}>DEL</button>
        </div>
        {/* <div className="number-section">
        </div> */}
        <div className="bottom-section">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>


  );
}

export default App;
