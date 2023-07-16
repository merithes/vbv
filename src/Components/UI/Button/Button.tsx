import './Button.scss'
import classNames from 'classnames'

interface ButtonProps {
  label?: String
  color?: string
  text?: string
  large?: boolean
  outerClasses?: string[]
  innerClasses?: string[]
}
function Button({
  label = '',
  color = 'primary',
  text = 'white',
  large = false,
  outerClasses = [],
  innerClasses = [],
}: ButtonProps) {
  return (
    <button
      className={classNames(
        outerClasses,
        'buttonWrapper',
        `bd-${color}`,
        `txt-${text}`,
        {
          large: large,
        }
      )}
    >
      <div className={classNames(innerClasses, 'button', `bg-${color}-dimmed`)}>
        {label}
      </div>
    </button>
  )
}
export { Button }
