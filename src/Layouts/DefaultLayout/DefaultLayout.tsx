import { Menu } from 'src/Components/Menu/Menu';
import { Outlet, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './DefaultLayout.scss';

const Layout = () => {
  const location = useLocation();
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
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="page" timeout={300}>
          <div className="pageContainer col-10 pa-md">
            <div className="pageContentWrapper pa-md bg-grey-dimmed">
              <div className="pageContentWrapper pa-md bg-grey-dimmed">
                <Outlet />
              </div>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export { Layout };
