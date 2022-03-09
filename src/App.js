import React, { useState } from "react";
import BoardSteps from "./components/BoardSteps";
import FormSteps from "./components/FormSteps";
import StepModel from "./components/StepModel";

function App() {
  const [steps, setSteps] = useState([])
  const [step, setStep] = useState(null)

  function handleFormData(ev) {
    const step = new StepModel(ev.date, ev.range)
    setSteps(prevSteps => {
      let match = false;
      prevSteps.map((el) => {
        if (el.date === step.date) {
          const num = +el.range + +step.range
          match = true
          return el.range = num
        }
        return el;
      })
      if (match) {
        return [...prevSteps];
      }
      return [...prevSteps, step]
    })
  }

  function handleRemove(id) {
    setSteps(prevBooks => prevBooks.filter(o => o.id !== id));
  }
  function handleEdit(id) {
    steps.forEach((el) => {
      if (el.id === id) {
        setStep(el)
      }
    })
  }
  function stopEdit(ev) {
    if (ev === null) {
      setStep(prev => null)
    }
  }
  return (
    <>
      <FormSteps onInputData={handleFormData} editData={step} stopEdit={stopEdit}/>
      <BoardSteps addSteps={steps} onRemove={handleRemove} onEdit={handleEdit}/>
    </>
  );
}

export default App;
