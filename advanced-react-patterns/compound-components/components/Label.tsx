import { type FC, type ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const Label: FC<Props> = ({ children }) => (
  <span>{children}</span>
)