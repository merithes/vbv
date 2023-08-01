import Button from 'src/Components/UI/Button/Button'
import Skeleton from 'src/Components/UI/Skeleton/Skeleton'

export default () => {
  return (
    <>
      <div className="row">
        <div className="col-12 row bg-grey-dimmed pa-md">
          <div className="col-12">
            <h2>Colors</h2>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
            <div>primary</div>
            <div className="row gap-none">
              <div className="col-6 bg-primary pt-xl"></div>
              <div className="col-6 bg-primary-dimmed"></div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
            <div>primary-light</div>
            <div className="row gap-none">
              <div className="col-6 bg-primary-light pt-xl"></div>
              <div className="col-6 bg-primary-light-dimmed"></div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
            <div>secondary</div>
            <div className="row gap-none">
              <div className="col-6 bg-secondary pt-xl"></div>
              <div className="col-6 bg-secondary-dimmed"></div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
            <div>accent</div>
            <div className="row gap-none">
              <div className="col-6 bg-accent pt-xl"></div>
              <div className="col-6 bg-accent-dimmed"></div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
            <div>highlight</div>
            <div className="row gap-none">
              <div className="col-6 bg-highlight pt-xl"></div>
              <div className="col-6 bg-highlight-dimmed"></div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 row bg-grey-dimmed pa-md">
          <div className="col-12">
            <h2>Buttons</h2>
          </div>
          <div className="col-xs-12 col-sm-6 row">
            <div className="col-12">
              <div>default color</div>
              <Button label="Default" />
            </div>
            <div className="col-12">
              <div>default color</div>
              <Button large label="Large" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 row">
            <div className="col-12">
              <div>alt color</div>
              <Button color="accent" label="Accent" />
            </div>
            <div className="col-12">
              <div>alt color</div>
              <Button color="highlight" large label="Highlight" />
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 row bg-grey-dimmed pa-md">
          <div className="col-12">
            <h2>Buttons (disabled)</h2>
          </div>
          <div className="col-xs-12 col-md-6 row">
            <div className="col-12">
              <div>default color</div>
              <Button disabled label="Default" />
            </div>
            <div className="col-12">
              <div>default color</div>
              <Button disabled large label="Large" />
            </div>
          </div>
          <div className="col-xs-12 col-md-6 row">
            <div className="col-12">
              <div>alt color</div>
              <Button disabled color="accent" label="Accent" />
            </div>
            <div className="col-12">
              <div>alt color</div>
              <Button disabled color="highlight" large label="Highlight" />
            </div>
          </div>
        </div>
        <div className="col-12 row bg-grey-dimmed pa-md">
          <div className="col-12">
            <h2>Typography</h2>
          </div>
          <div className="col-6 row">
            <div className="col-12">
              <div className="title text-4xl">Aa</div>
              <div>Space Mono</div>
              <div className="border-t bd-white-dimmed mt-md"></div>
            </div>
            <div className="col-12">
              <h1 className="text-bold">H1 Header</h1>
              <h2 className="text-semibold">H2 Header</h2>
              <h3 className="text-thin">H3 Header</h3>
              <h1 className="text-bold text-italic">H1 Header</h1>
              <h2 className="text-semibold text-italic">H2 Header</h2>
              <h3 className="text-thin text-italic">H3 Header</h3>
            </div>
          </div>
          <div className="col-6 row">
            <div className="col-12">
              <div className="text-4xl">Aa</div>
              <div>Roboto</div>
              <div className="border-t bd-white-dimmed mt-md"></div>
            </div>
            <div className="col-12">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              <p className="text-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
              <p className="text-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
              <p className="text-bold text-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 row bg-grey-dimmed pa-md">
          <div className="col-12">
            <h2>Skeletons</h2>
          </div>
          <div className="col-12">
            <Skeleton classes="full-radius square" height="5em" />
            <Skeleton width="89%" />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </div>
    </>
  )
}
