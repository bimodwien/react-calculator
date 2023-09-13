import React from 'react'

const Action = ({handleAction, handleClear, handleDelete, handlePlusMinus, angka}) => {
  return (
    <>
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
    </>
  )
}

export default Action