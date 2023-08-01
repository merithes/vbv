import './Skeleton.scss'
import classNames from 'classnames'

interface SkeletonProps {
  color?: string
  height?: string | number
  width?: string | number | null
  type?: 'text' | 'box'
  classes?: string[] | string
}

export default function Skeleton({
  color = 'lightgrey',
  height = '1em',
  width = null,
  type = 'text',
  classes = []
}: SkeletonProps) {
  if (height === '1em' && width === null) {
    width = '100%'
  } else if (width === null) {
    width = ''
  }
  height = typeof height === 'number' || height.match(/^\d+$/) ? `${height}px` : height
  width = typeof width === 'number' || width.match(/^\d+$/) ? `${width}px` : width
  return (
    <span
      className={classNames('skeleton', `bg-${color}-dimmed`, `skeleton-type-${type}`, classes)}
      style={{ height: height, width: width }}
    ></span>
  )
}
