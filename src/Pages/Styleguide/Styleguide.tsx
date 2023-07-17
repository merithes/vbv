import { Button } from 'src/Components/UI/Button/Button'
const Styleguide = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 row bg-grey-dimmed pa-md">
          <div className="col-12">
            <h2>Colors</h2>
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
            <div>primary</div>
            <div className="row gap-none">
              <div className="col-6 bg-primary pt-xl"></div>
              <div className="col-6 bg-primary-dimmed"></div>
            </div>
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
            <div>primary-light</div>
            <div className="row gap-none">
              <div className="col-6 bg-primary-light pt-xl"></div>
              <div className="col-6 bg-primary-light-dimmed"></div>
            </div>
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
            <div>secondary</div>
            <div className="row gap-none">
              <div className="col-6 bg-secondary pt-xl"></div>
              <div className="col-6 bg-secondary-dimmed"></div>
            </div>
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
            <div>accent</div>
            <div className="row gap-none">
              <div className="col-6 bg-accent pt-xl"></div>
              <div className="col-6 bg-accent-dimmed"></div>
            </div>
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
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
          <div className="col-xs-12 col-md-6 row">
            <div className="col-12">
              <Button label="Default" />
            </div>
            <div className="col-12">
              <Button large label="Large" />
            </div>
          </div>
          <div className="col-xs-12 col-md-6 row">
            <div className="col-12">
              <Button color="accent" label="Accent" />
            </div>
            <div className="col-12">
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
              <Button disabled label="Default" />
            </div>
            <div className="col-12">
              <Button disabled large label="Large" />
            </div>
          </div>
          <div className="col-xs-12 col-md-6 row">
            <div className="col-12">
              <Button disabled color="accent" label="Accent" />
            </div>
            <div className="col-12">
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export { Styleguide }
