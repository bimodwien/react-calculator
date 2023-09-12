import React from 'react'

const History = ({listHistory, onClickHistory}) => {
  return (
    <div className="history-board">
        <div>History</div>
        {listHistory.map((history, indexHistory) => {
          return <div key={indexHistory} onClick={() => onClickHistory(history)}>
            <div>{history.inputPertama}{history.inputKalkulasi}{history.inputKedua}</div>
            <div>{history.hasil}</div>
          </div>          
        })}
      </div>
  )
}

export default History