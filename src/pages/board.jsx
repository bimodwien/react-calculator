import React, { useRef, useState } from "react";
import "./style.css";

const Board = () => {
  const [inputNumber, setinputNumber] = useState("");
  const [result, setResult] = useState(0);
  const actionToCalculate = useRef(null);

  const [listHistory, setListHistory] = useState([]);
  const [liveHistory, setLiveHistory] = useState('');

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
      setLiveHistory(liveTest);
      setinputNumber('');
    }
    setinputNumber('');
  }

  // ini supaya liveHistory bisa mendapatkan update terbaru dari liveHistory yang ada di react
  function liveTest(params) {
    return `${params} =`;
  }

  function calculate() {
    let calculateResult = 0;
    if (actionToCalculate.current === '+') {
      calculateResult = Number(result) + Number(inputNumber)
      setLiveHistory(`${result} + ${inputNumber}`)
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
    setLiveHistory('');
  }

  function handleDelete() {
    const eraseNumber = inputNumber.split('');
    eraseNumber.pop();
    setinputNumber(eraseNumber.join(''));
  }

  function handleClickHistory(currentHistory) {
    setinputNumber(currentHistory.hasil);    
  }

  function handlePlusMinus() {
    setinputNumber((-1*inputNumber).toString())
  }


  return (
    <>
    <div className="full-content">
      <div className="main-board">
        <div className="title-board">Calculator</div>
        <div className="result-board">
          <div>
            {liveHistory}
          </div>
          <div>
            {!inputNumber ? result : inputNumber}
          </div>
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
            <button className="equal-button" onClick={() => handleAction('=')}>=</button>
          </div>       
          <div className="calculating-button-field">
            <button className="angka-button" onClick={handlePlusMinus}>+/-</button>
            <button className="angka-button" onClick={() => {angka("0");}}>0</button>
            <button className="angka-button" onClick={() => {angka(".");}}>.</button>
          </div>
        </div>
      </div>
      <div className="history-board">
        <div>History</div>
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
