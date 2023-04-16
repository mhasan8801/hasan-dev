import Button from "../elements/Button";
import Logo from "../elements/Logo";
import Paragraph from "../elements/Paragraph";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="#">
            <Logo/>
          </a>
        </div>
        <div
          className="navbar-collapse collapse justify-content-center"
          id="navbarTogglerDemo01"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <Paragraph>Home</Paragraph>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Paragraph>Portofolio</Paragraph>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Paragraph>Blog</Paragraph>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Button>CV</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;