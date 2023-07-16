import { Button } from 'src/Components/UI/Button/Button'
const Styleguide = () => {
  return (
    <>
      <h2>Colors</h2>
      <div className="row">
        <div className="col-1">
          <div>primary</div>
          <div className="row gap-none">
            <div className="col-6 bg-primary pt-xl"></div>
            <div className="col-6 bg-primary-dimmed"></div>
          </div>
        </div>
        <div className="col-1">
          <div>primary-light</div>
          <div className="row gap-none">
            <div className="col-6 bg-primary-light pt-xl"></div>
            <div className="col-6 bg-primary-light-dimmed"></div>
          </div>
        </div>
        <div className="col-1">
          <div>secondary</div>
          <div className="row gap-none">
            <div className="col-6 bg-secondary pt-xl"></div>
            <div className="col-6 bg-secondary-dimmed"></div>
          </div>
        </div>
        <div className="col-1">
          <div>accent</div>
          <div className="row gap-none">
            <div className="col-6 bg-accent pt-xl"></div>
            <div className="col-6 bg-accent-dimmed"></div>
          </div>
        </div>
        <div className="col-1">
          <div>highlight</div>
          <div className="row gap-none">
            <div className="col-6 bg-highlight pt-xl"></div>
            <div className="col-6 bg-highlight-dimmed"></div>
          </div>
        </div>
      </div>
      <h2>Buttons</h2>
      <div className="row">
        <div className="col-1">
          <Button label="Default" />
        </div>
        <div className="col-1">
          <Button color="accent" label="Button" />
        </div>
      </div>
      <div className="row mt-md">
        <div className="col-1">
          <Button large label="Large" />
        </div>
        <div className="col-1">
          <Button color="highlight" large label="Large OL" />
        </div>
      </div>
    </>
  )
}
export { Styleguide }
