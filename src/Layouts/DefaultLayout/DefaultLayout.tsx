import { Menu } from 'src/Components/Menu/Menu'
import { useLocation, useOutlet } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './DefaultLayout.scss'
import React from 'react'; // Add this line to import React

const Layout = () => {
  const location = useLocation(),
        outlet = useOutlet(),
        nodeRef = React.useRef(null)
  return (
    <div className="defaultContainer row">
      <div className="menuContainer col-2 pa-md bg-grey-dimmed bd-lightgrey border-r">
        <Menu
          links={[
            { link: '/', label: 'Home' },
            { link: '/styleguide', label: 'Styleguide' }
          ]}
        />
      </div>
        <div className="pageContainer col-10 pa-md">
          <div className="pageContentWrapper pa-md bg-grey-dimmed">
            <TransitionGroup>
              <CSSTransition key={location.pathname} classNames="page" timeout={300} nodeRef={nodeRef} // Add the nodeRef prop
              >
                <div ref={nodeRef}>
                {outlet}

                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
    </div>
  )
}

export { Layout }
