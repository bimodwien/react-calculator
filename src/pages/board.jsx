import React, { useRef, useState } from "react";
import "./style.css";
import Result from "../components/Result";
import History from "../components/History";


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
      setinputNumber(result);
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
        <Result currentHistory={liveHistory} inputNumber={inputNumber} result={result} />
        <div className="calculating-board">
          <div className="action-button" onClick={handleClear}>C</div>
          <div className="action-button" onClick={() => {handleAction(':')}}>:</div>
          <div className="action-button" onClick={() => {handleAction('x')}}>*</div>
          <div className="action-button" onClick={handleDelete}>Backspace</div>
          <div className="angka-button" onClick={() => {angka('7')}}>7</div>
          <div className="angka-button" onClick={() => {angka('8')}}>8</div>
          <div className="angka-button" onClick={() => {angka('9')}}>9</div>
          <div className="action-button" onClick={()=> {handleAction('-')}}>-</div>
          <div className="angka-button" onClick={() => {angka('4')}}>4</div>
          <div className="angka-button" onClick={() => {angka('5')}}>5</div>
          <div className="angka-button" onClick={() => {angka('6')}}>6</div>
          <div className="action-button" onClick={() => {handleAction('+')}}>+</div>
          <div className="angka-button" onClick={() => {angka('1')}}>1</div>
          <div className="angka-button" onClick={() => {angka('2')}}>2</div>
          <div className="angka-button" onClick={() => {angka('3')}}>3</div>
          <div className="equal-button" onClick={() => {handleAction('=')}}>=</div>
          <div className="angka-button" onClick={handlePlusMinus}>+/-</div>
          <div className="angka-button" onClick={() => {angka('0')}}>0</div>
          <div className="angka-button" onClick={() => {angka('.')}}>.</div>
        </div>
      </div>
      <History listHistory={listHistory} onClickHistory={handleClickHistory}/>
    </div>
    </>
  );
};

export default Board;
