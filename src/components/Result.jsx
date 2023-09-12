import React from 'react'

const Result = (props) => {
  return (
    <div className="result-board">
    <div>
      {props.currentHistory}
    </div>
    <div>
      {!props.inputNumber ? props.result : props.inputNumber}
    </div>
  </div>
  )
}

export default Result