import { type FC } from 'react'

type Props = {
  handleDecrement: () => void
}
export const Decrement: FC<Props> = ({ handleDecrement }) => <button onClick={handleDecrement}>-</button>
