import { Counter } from './components/Counter'
import { useState } from 'react'

const MIN = 0
const MAX = 10

export const SomeParentComponent = () => {
  const [state, setState] = useState<number>(0)

  return (
    <>
      <Counter value={state} setCount={setState} maxCount={MAX} minCount={MIN}>
        {({ value, handleIncrement, handleDecrement }) => (
          <>
            <Counter.Decrement handleDecrement={handleDecrement} />
            <Counter.Count>Count: {value}</Counter.Count>
            <Counter.Increment handleIncrement={handleIncrement} />
          </>
        )}
      </Counter>
    </>
  )
}
