import { useRef, useState } from 'react'

export const ControlledForm = () => {
  const [value, setValue] = useState('')

  return <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
}

export const UncontrolledForm = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    alert(`Value: ${inputRef?.current?.value}`)
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
