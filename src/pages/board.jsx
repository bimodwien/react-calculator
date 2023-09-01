import React, { useRef, useState } from "react";
import "./style.css";

const Board = () => {
  const [inputNumber, setinputNumber] = useState("");
  const [result, setResult] = useState(0);
  const actionToCalculate = useRef(null);

  const [listHistory, setListHistory] = useState([]);
  // const [liveHistory, setLiveHistory] = useState('');

  function angka(angka) {
    setinputNumber(inputNumber + angka);
  }

  function handleAction(action) {
    if (actionToCalculate.current === null && inputNumber === '') {
      setinputNumber('0');
    }
    if (actionToCalculate.current !== null){
      calculate();
    }
    else {
      setResult(inputNumber);
    }    
    actionToCalculate.current = action;
    if (action === '=') {
      actionToCalculate.current = null;
      setinputNumber('');
    }
    setinputNumber('');
  }

  function calculate() {
    let calculateResult = 0;
    if (actionToCalculate.current === '+') {
      calculateResult = Number(result) + Number(inputNumber)
    }
    if (actionToCalculate.current === '-') {
      calculateResult = result - inputNumber;
    }
    if (actionToCalculate.current === 'x') {
      calculateResult = result * inputNumber;
    }
    if (actionToCalculate.current === ':') {
      calculateResult = result / inputNumber;
    }
    setResult(calculateResult);
    setListHistory([...listHistory, {
      inputPertama: result,
      inputKalkulasi: actionToCalculate.current,
      inputKedua: inputNumber,
      hasil: calculateResult
    }])
  }

  function handleClear() {
    actionToCalculate.current = null;
    setinputNumber('');
    setResult(0);
  }

  function handleDelete() {
    const eraseNumber = inputNumber.split('');
    eraseNumber.pop();
    setinputNumber(eraseNumber.join(''));
  }

  function handleClickHistory(currentHistory) {
    setinputNumber(currentHistory.hasil);    
  }


  return (
    <>
    <div className="full-content">
      <div className="main-board">
        <div>Calculator</div>
        <div className="result-board">
        {!inputNumber ? result : inputNumber}
        </div>
        <div className="calculating-board">
          <div className="calculating-button-field">
            <button className="action-button" onClick={handleClear}>C</button>
            <button className="action-button" onClick={() => handleAction(':')}>:</button>
            <button className="action-button" onClick={() => handleAction('x')}>x</button>
            <button className="action-button" onClick={handleDelete}>Backspace</button>
          </div>
          <div className="calculating-button-field">
            <button className="angka-button" onClick={() => {angka("7")}}>7</button>
            <button className="angka-button" onClick={() => {angka("8")}}>8</button>
            <button className="angka-button" onClick={() => {angka("9")}}>9</button>
            <button className="action-button" onClick={()=> handleAction('-')}>-</button>
          </div>
          <div className="calculating-button-field">
            <button className="angka-button" onClick={() => {angka("4")}}>4</button>
            <button className="angka-button" onClick={() => {angka("5")}}>5</button>
            <button className="angka-button" onClick={() => {angka("6")}}>6</button>
            <button className="action-button" onClick={() => handleAction('+')}>+</button>
          </div>
          <div className="calculating-button-field">
            <button className="angka-button" onClick={() => {angka("1");}}>1</button>
            <button className="angka-button" onClick={() => {angka("2");}}>2</button>
            <button className="angka-button" onClick={() => {angka("3");}}>3</button>
            <div className="last-field">
              <button className="angka-button" onClick={() => {angka(".");}}>.</button>
              <button className="angka-button" onClick={() => {angka("0");}}>0</button>
            </div>
            <button className="equal-button" onClick={() => handleAction('=')}>=</button>
          </div>       
        </div>
      </div>
      <div className="history-board">
        {listHistory.map((history, indexHistory) => {
          return <div key={indexHistory} onClick={() => handleClickHistory(history)}>
            <div>{history.inputPertama}{history.inputKalkulasi}{history.inputKedua}</div>
            <div>{history.hasil}</div>
          </div>          
        })}
      </div>
    </div>
    </>
  );
};

export default Board;
