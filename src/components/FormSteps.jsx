import React from 'react'

export default function FormSteps() {
  return (
    <form className="form-steps">
      <div className="input-date">
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input type="text" name="date"/>
      </div>
      <div className="input-length">
        <label htmlFor="length">Пройдено км</label>
        <input type="text" name="length"/>
      </div>
      <button className="btn-steps" type="button">OK</button>
    </form>
  )
}
