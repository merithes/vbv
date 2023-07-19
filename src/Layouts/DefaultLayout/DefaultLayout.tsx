import { Menu } from 'src/Components/Menu/Menu'
import { useLocation, useOutlet } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useRef } from 'react'
import './DefaultLayout.scss'

const Layout = () => {
  const location = useLocation(),
    outletRef = useRef<HTMLDivElement | null>(null),
    currentOutlet = useOutlet()
  return (
    <div className="layoutContainer row">
      <div className="menuContainer col-2 pa-md bg-grey-dimmed bd-lightgrey border-r">
        <Menu
          links={[
            { link: '/', label: 'Home' },
            { link: '/styleguide', label: 'Styleguide' }
          ]}
        />
      </div>
      <div className="page col-10 pa-md full-vh">
        <div className="pageContainer pa-md bg-grey-dimmed full-height">
          <div
            className="pageContentWrapper position-relative"
            tabIndex={0}
            role="region"
            aria-label="page content"
          >
            <SwitchTransition>
              <CSSTransition
                key={location.pathname}
                nodeRef={outletRef}
                timeout={100}
                classNames="page"
                unmountOnExit
              >
                <div ref={outletRef}>{currentOutlet}</div>
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Layout }
