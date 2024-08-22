import { type ReactNode, useCallback } from 'react'

interface Props<T> {
  items: Array<T>
  renderProps: (item: T) => ReactNode
}

const Grid = <T,>({ items, renderProps }: Props<T>) => {
  const renderItems = useCallback(
    (_items: typeof items) => {
      return _items.map((item) => renderProps(item))
    },
    [renderProps]
  )

  return <div className="grid">{items?.length ? renderItems(items) : <span>Список пуст</span>}</div>
}

const ITEMS = [
  { title: 'Title 1', href: 'Title 1' },
  { title: 'Title 2', href: 'Title 2' }
]

export const SomeOutsideComponent = () => (
  <>
    <h1>Render props pattern</h1>
    <Grid items={ITEMS} renderProps={(item) => <a href={item.href}>{item.title}</a>} />
  </>
)
