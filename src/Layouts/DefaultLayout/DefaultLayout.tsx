import { Menu } from 'src/Components/Menu/Menu'
import { Outlet } from 'react-router-dom'
import './DefaultLayout.scss'

const Layout = () => (
  <div className="defaultContainer row">
    <div className="menuContainer col-2 pa-md bg-grey-dimmed bd-lightgrey border-r">
      <Menu
        links={[
          { link: '/', label: 'Home' },
          { link: '/styleguide', label: 'Styleguide' },
        ]}
      />
    </div>

    <div className="pageContainer col-10 pa-md">
      <div className="pageContentWrapper pa-md bg-grey-dimmed">
        <Outlet />
      </div>
    </div>
  </div>
)

export { Layout }
