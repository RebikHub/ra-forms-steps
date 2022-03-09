import React, {useState} from 'react'

export default function FormSteps({onInputData, editData, stopEdit}) {
  const [form, setForm] = useState({
    date: '',
    range: ''
  })

  function handleDate(ev) {
    setForm(prevForm => ({...prevForm, date: ev.target.value}))
  }
  function handleRange(ev) {
    setForm(prevForm => ({...prevForm, range: ev.target.value}))
  }
  function handleSubmit(ev) {
    ev.preventDefault()
    onInputData(form)
    setForm({
      date: '',
      range: ''
    })
  }

  if (editData !== null) {
    setForm({
      date: editData.date,
      range: editData.range
    })
  }

  return (
    <form className="form-steps">
      <div className="input-date">
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input type="text"
          name="date"
          value={form.date}
          onChange={handleDate}/>
      </div>
      <div className="input-range">
        <label htmlFor="range">Пройдено км</label>
        <input type="text"
          name="range"
          value={form.range}
          onChange={handleRange}/>
      </div>
      <button className="btn-steps" type="button" onClick={handleSubmit}>OK</button>
    </form>
  )
}
