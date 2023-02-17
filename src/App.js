import baseLogo from "./assets/clicks-base-logo.jpg";

function App() {
  return (
    <>
      <h1>heading one</h1>
      <h2>heading two</h2>
      <h3>heading three</h3>
      <h4>heading four</h4>
      <h5>heading five</h5>
      <div className="title">
        <h2>Title</h2>
        <div className="title-underline"></div>
      </div>
      <p>
        Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Dolores sunt ut molestias esse distinctio doloremque quisquam est, illo
        ea quaerat ducimus debitis, recusandae odit qui natus deserunt nobis!
        Rerum similique at asperiores aperiam reiciendis maxime natus fugiat
        blanditiis itaque sunt officiis ratione, est sapiente illum quo! Facere,
        provident deleniti! Incidunt.
      </p>
      <p>
        Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Dolores sunt ut molestias esse distinctio doloremque quisquam est, illo
        ea quaerat ducimus debitis, recusandae odit qui natus deserunt nobis!
        Rerum similique at asperiores aperiam reiciendis maxime natus fugiat
        blanditiis itaque sunt officiis ratione, est sapiente illum quo! Facere,
        provident deleniti! Incidunt.
      </p>
      <ul>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
      </ul>
      <a href="#">Link</a>

      <img className="img" src={baseLogo} alt="cat" />
      <br />

      <button className="btn" type="button">
        regular button
      </button>
      <button className="btn btn-variant" type="button">
        variant button
      </button>
      <br />
      <br />

      <div className="alert alert-danger">Danger message</div>
      <div className="alert alert-success">Success message</div>

      <form className="form">
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="enter your name"
            id="name"
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="number">
            Number
          </label>
          <input className="form-input" type="number" id="number" />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-input"
            type="email"
            placeholder="enter your email"
            id="email"
          />
          <small className="form-alert">please provide value</small>
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="textarea">
            Textarea
          </label>
          <textarea className="form-textarea"></textarea>
        </div>
        <button className="btn btn-block" type="submit">
          submit
        </button>
      </form>
      <br />

      <div className="loading"></div>
    </>
  );
}

export default App;
