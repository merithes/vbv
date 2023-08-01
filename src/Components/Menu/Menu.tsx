import { NavLink } from 'react-router-dom'
import './Menu.scss'
import classNames from 'classnames'

interface MenuLink {
  link?: string
  label?: string
  classes?: string[]
  color?: string
}
interface MenuProps {
  links?: MenuLink[]
}

export default function Menu({ links = [] }: MenuProps) {
  return (
    <div className="menu">
      <div className="menu-links row">
        {links.map(({ link, label, classes, color }, index) => (
          <div
            key={`menu_${index}`}
            className={classNames(
              'col-12 menu-link-wrapper menu-link title',
              `bd-${color ?? 'primary'}`,
              classes
            )}
          >
            <NavLink to={link ?? ''} className={classNames(`bg-${color ?? 'primary'}-dimmed`)}>
              {label}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}
