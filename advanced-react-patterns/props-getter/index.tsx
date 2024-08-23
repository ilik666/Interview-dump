import { type FC, type FocusEventHandler, type InputHTMLAttributes, useState } from 'react'

interface TextInputWithFocusProps {
  onFocusChange?: (isFocused: boolean) => void
  inputProps?: InputHTMLAttributes<HTMLInputElement>
}

interface GetInputProps {
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  [key: string]: any
}

const TextInputWithFocus: FC<TextInputWithFocusProps> = ({ onFocusChange, inputProps = {} }) => {
  const [isFocused, setIsFocused] = useState(false)

  const getInputProps = (props: GetInputProps = {}): InputHTMLAttributes<HTMLInputElement> => {
    return {
      ...props,
      onFocus: (event) => {
        setIsFocused(true)
        if (props.onFocus) props.onFocus(event)
        if (onFocusChange) onFocusChange(true)
      },
      onBlur: (event) => {
        setIsFocused(false)
        if (props.onBlur) props.onBlur(event)
        if (onFocusChange) onFocusChange(false)
      }
    }
  }

  return (
    <input
      {...getInputProps({
        ...inputProps,
        placeholder: isFocused ? 'Focused!' : 'Click to focus'
      })}
    />
  )
}

export const App: FC = () => {
  const handleFocusChange = (isFocused: boolean) => {
    console.log(`Input is ${isFocused ? 'focused' : 'blurred'}`)
  }

  return (
    <div>
      <h2>Input with Focus Management</h2>
      <TextInputWithFocus onFocusChange={handleFocusChange} />
    </div>
  )
}
