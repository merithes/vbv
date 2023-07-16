import { Menu } from 'src/Components/Menu/Menu'
import { Outlet } from 'react-router-dom'
import './DefaultLayout.scss'

const Layout = () => (
  <div className="defaultContainer">
    <div className="menuContainer">
      <Menu
        links={[
          { link: '/', label: 'Home' },
          { link: '/styleguide', label: 'Styleguide' },
        ]}
      />
    </div>

    <div className="pageContainer">
      <div className="pageContentWrapper">
        <Outlet />
      </div>
    </div>
  </div>
)

export { Layout }
