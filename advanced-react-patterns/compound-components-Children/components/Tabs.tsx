import { type FC, type ReactNode, Children, ReactElement, useState, useCallback } from 'react'

import { Tab, type TabProps } from './Tab'

type ChildrenProps = { Tab: typeof Tab }

type Props = {
  children: ReactNode
  defaultActiveValue?: number
}

const Tabs: FC<Props> & ChildrenProps = ({ defaultActiveValue, children }) => {
  const [activeTab, setActiveTab] = useState<number>(defaultActiveValue ?? 0)

  const handleTabClick = useCallback((index: number) => {
    setActiveTab(index)
  }, [])

  return (
    <div>
      <div>
        {Children.map(children, (child, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            style={{ fontWeight: activeTab === index ? 'bold' : 'normal' }}
          >
            {(child as ReactElement<TabProps>).props.label}
          </button>
        ))}
      </div>
      <div>
        {Children.map(children, (child, index) => (
          <div style={{ display: activeTab === index ? 'block' : 'none' }}>
            {(child as ReactElement<TabProps>).props.children}
          </div>
        ))}
      </div>
    </div>
  )
}

Tabs.Tab = Tab

export { Tabs }
