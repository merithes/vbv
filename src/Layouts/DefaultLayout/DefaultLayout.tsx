import { Menu } from 'src/Components/Menu/Menu'
import { useLocation, useOutlet } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import React from 'react'
import './DefaultLayout.scss'

const Layout = () => {
  const location = useLocation()
  const nodeRef = React.useRef(null)
  const currentOutlet = useOutlet()
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
      <div className="pageContainer col-10 pa-md full-vh">
        <div className="pageContentWrapper pa-md bg-grey-dimmed full-height">
          <div className="position-relative">
            <SwitchTransition>
              <CSSTransition
                key={location.pathname}
                nodeRef={nodeRef}
                timeout={200}
                classNames="page"
                unmountOnExit>
                <div ref={nodeRef}>{currentOutlet}</div>
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Layout }
