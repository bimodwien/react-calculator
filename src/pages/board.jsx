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
    if (action === 'c') {
      actionToCalculate.current = null;
      setinputNumber('');
      setResult(0);
      return;
    }
    if (action === 'b') {
      const eraseNumber = inputNumber.split('');
      eraseNumber.pop();
      setinputNumber(eraseNumber.join(''));
      return;
    }
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

  function handleClickHistory(currentHistory) {
    setinputNumber(currentHistory.hasil);    
  }


  return (
    <>
      <div className="board-calculating">
        <div>Board</div>
        <div className="board-result">Ini buat Hasil : {!inputNumber ? result : inputNumber}</div>
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
      <div className="history-board">
        {listHistory.map((history, indexHistory) => {
          return <div key={indexHistory} onClick={() => handleClickHistory(history)}>
            <div>{history.inputPertama}{history.inputKalkulasi}{history.inputKedua}</div>
            <div>{history.hasil}</div>
          </div>          
        })}
      </div>
    </>
  );
};

export default Board;
