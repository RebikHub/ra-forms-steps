import React from 'react'

export default function Step() {
  return (
    <div className="step">
      <p className="step-date">20.07.2019</p>
      <p className="step-length">5.7</p>
      <div className="step-action">
        <button className="btn-change" type="button"></button>
        <button className="btn-remove" type="button"></button>
      </div>
    </div>
  )
}
