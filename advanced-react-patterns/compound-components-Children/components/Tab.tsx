import { type FC, type ReactNode } from 'react'

export type TabProps = {
  label: string
  children: ReactNode
}

export const Tab: FC<TabProps> = ({ children }) => <>{children}</>
