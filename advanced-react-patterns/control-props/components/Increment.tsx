import { type FC } from 'react'

type Props = {
  handleIncrement: () => void
}
export const Increment: FC<Props> = ({ handleIncrement }) => <button onClick={handleIncrement}>+</button>
