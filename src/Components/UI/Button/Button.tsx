import './Button.scss'
import classNames from 'classnames'

interface ButtonProps {
  label?: string
  color?: string
  text?: string
  large?: boolean
  outerClasses?: string[]
  innerClasses?: string[]
  disabled?: boolean
}

export default ({
  label = '',
  color = 'primary',
  text = 'white',
  large = false,
  outerClasses = [],
  innerClasses = [],
  disabled = false
}: ButtonProps) => {
  color = disabled ? 'lightgrey' : color
  text = disabled ? 'white-dimmed' : text
  return (
    <button
      className={classNames(outerClasses, 'buttonWrapper', `bd-${color}`, `txt-${text}`, {
        large: large
      })}
      disabled={disabled}
    >
      <div className={classNames(innerClasses, 'button', `bg-${color}-dimmed`)}>{label}</div>
    </button>
  )
}
