import { type ComponentType } from 'react'

interface Props {
  isLoading: boolean
}

export const withLoading = <P,>(Component: ComponentType<P>) => {
  return (props: Props & P) => {
    if (!props.isLoading) {
      return <Component {...props} />
    }

    return <div>Loading...</div>
  }
}
