import { Menu } from 'src/Components/Menu/Menu'
import { useLocation, useOutlet } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import {useRef, useEffect, useState} from 'react'
import './DefaultLayout.scss'
import classNames from 'classnames'

const Layout = () => {
  const location = useLocation(),
        pageRef = useRef<HTMLDivElement | null>(null),
        containerRef = useRef<HTMLDivElement | null>(null),
        outletRef = useRef<HTMLDivElement | null>(null),
        currentOutlet = useOutlet(),
        [overflow, setOverflow] = useState(false),
        [fullyScrolled, setFullyScrolled] = useState(false)
  const checkHeight = () => {
    let outletHeight: number = typeof outletRef?.current?.clientHeight !== 'undefined' ? outletRef?.current?.clientHeight : 0,
        pageHeight: number = typeof containerRef?.current?.clientHeight !== 'undefined' ? containerRef?.current?.clientHeight : 0,
        pagePadding: number = (pageRef?.current !== null ? parseInt(getComputedStyle(pageRef?.current!).paddingTop) : 0),
        containerPadding: number = (containerRef?.current !== null ? parseInt(getComputedStyle(containerRef?.current!).paddingTop) : 0)

    console.log((outletHeight > (pageHeight - pagePadding - containerPadding)))
    setOverflow(outletHeight > (pageHeight - pagePadding - containerPadding))
  }
  const managePageScroll = (e: Event) => {
    const {target} = e
    if (target !== null) {
      console.log(target, target.scrollHeight, target.clientHeight, target.scrollHeight - target.clientHeight, target.scrollTop)
      if (target.scrollHeight - target.clientHeight === target.scrollTop) {
        setFullyScrolled(true);
      } else {
        setFullyScrolled(false);
      }
    }
  }
  useEffect(checkHeight, []);
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
      <div className="page col-10 pa-md full-vh" ref={pageRef}>
        <div className="pageContainer pa-md bg-grey-dimmed full-height" ref={containerRef}>
          <div className={classNames("pageContentWrapper position-relative", {overflowing: overflow})} onScroll={managePageScroll}>
            <SwitchTransition>
              <CSSTransition
                key={location.pathname}
                nodeRef={outletRef}
                timeout={100}
                classNames="page"
                onEnter={checkHeight}
                unmountOnExit>
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
