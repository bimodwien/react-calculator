import React, { useState } from 'react'
import './style.css'

const Board = () => {

  const [counter, setCounter] = useState('');
  const [result, setResult] = useState(0);

  function angka(params) {
   setCounter(counter + params)
  }


  return (
    <>
      <div className='board-calculating'>
        <div>Board</div>
        <div className='board-result'>Ini buat Hasil : {counter}</div>
        <button>C</button>
        <button>:</button>
        <button>x</button>
        <button>Backspace</button>
        <br />
        <button onClick={()=> {angka('7')}}>7</button>
        <button onClick={()=> {angka('8')}}>8</button>
        <button onClick={()=> {angka('9')}}>9</button>
        <button>-</button>
        <br />
        <button onClick={()=> {angka('4')}}>4</button>
        <button onClick={()=> {angka('5')}}>5</button>
        <button onClick={()=> {angka('6')}}>6</button>
        <button>+</button>
        <br />
        <button onClick={()=> {angka('1')}}>1</button>
        <button onClick={()=> {angka('2')}}>2</button>
        <button onClick={()=> {angka('3')}}>3</button>
        <button>=</button>
        <br />
        <button onClick={()=> {angka('0')}}>0</button>
        <button>.</button>
      </div>
    </>
  )
}

export default Board