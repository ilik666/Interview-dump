import { type FC, ReactNode } from 'react'

import { Count } from './Count'
import { Increment } from './Increment'
import { Decrement } from './Decrement'

type ChildrenProps = {
  value?: number
  minCount?: number
  maxCount?: number
  handleIncrement: () => void
  handleDecrement: () => void
}

type Props = {
  value: number
  minCount?: number
  maxCount?: number
  setCount: (count: number) => void
  children: (settings: ChildrenProps) => ReactNode
}

type CompoundProps = { Count: typeof Count; Increment: typeof Increment; Decrement: typeof Decrement }

const Counter: FC<Props> & CompoundProps = ({ children, setCount, value, minCount, maxCount }) => {
  const handleIncrement = () => {
    if (maxCount && value < maxCount) {
      setCount(value + 1)
      return
    }

    setCount(value + 1)
  }

  const handleDecrement = () => {
    if (minCount && value > minCount) {
      setCount(value - 1)
      return
    }

    setCount(value - 1)
  }
  return <div className="counter">{children({ value, minCount, maxCount, handleDecrement, handleIncrement })}</div>
}

Counter.Count = Count
Counter.Increment = Increment
Counter.Decrement = Decrement

export { Counter }
