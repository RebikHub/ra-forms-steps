import React from 'react'
import Step from './Step'

export default function BoardSteps() {
  return (
    <div className="board-steps">
      <div className="board-header">
        <p className="board-date">Дата (ДД.ММ.ГГ)</p>
        <p className="board-length">Пройдено км</p>
        <p className="board-action">Действие</p>
      </div>
      <div className="board-body">
        <Step/>
      </div>
    </div>
  )
}
