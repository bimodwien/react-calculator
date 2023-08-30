import React, { useRef, useState } from "react";
import "./style.css";

const Board = () => {
  const [counter, setCounter] = useState("");
  const [result, setResult] = useState(0);
  const storage = useRef(null);

  function angka(params) {
    setCounter(counter + params);
  }

  function handleAction(action) {
    if (action === 'b') {
      const eraseNumber = counter.split('');
      eraseNumber.pop();
      setCounter(eraseNumber.join(''));
    }
    if (action === 'c') {
      storage.current = null;
      setCounter('');
      setResult(0);
    }
    if (storage.current !== null) {
      calculate();
    }
    else {
      setResult(counter);
    }
    setCounter('');
    storage.current = action;

    if (action === '=') {
      storage.current = null;
      setCounter('');
    }

  }

  function calculate() {
    
  }


  return (
    <>
      <div className="board-calculating">
        <div>Board</div>
        <div className="board-result">Ini buat Hasil : {!counter ? result : counter}</div>
        <div>
          <button onClick={() => handleAction('c')}>C</button>
          <button onClick={() => handleAction(':')}>:</button>
          <button onClick={() => handleAction('x')}>x</button>
          <button onClick={() => handleAction('b')}>Backspace</button>
        </div>
        <div>
          <button onClick={() => {angka("7")}}>7</button>
          <button onClick={() => {angka("8")}}>8</button>
          <button onClick={() => {angka("9")}}>9</button>
          <button onClick={()=> handleAction('-')}>-</button>
        </div>
        <div>
          <button onClick={() => {angka("4")}}>4</button>
          <button onClick={() => {angka("5")}}>5</button>
          <button onClick={() => {angka("6")}}>6</button>
          <button onClick={() => handleAction('+')}>+</button>
        </div>
        <div>
          <button onClick={() => {angka("1");}}>1</button>
          <button onClick={() => {angka("2");}}>2</button>
          <button onClick={() => {angka("3");}}>3</button>
          <button onClick={() => handleAction('=')}>=</button>
        </div>
        <div>
          <button onClick={() => {angka("0");}}>0</button>
          <button onClick={() => {angka(".");}}>.</button>
        </div>
      </div>
    </>
  );
};

export default Board;
