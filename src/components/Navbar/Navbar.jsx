import Button from "../../elements/Button";
import Logo from "../../elements/Logo";
import Paragraph from "../../elements/Paragraph";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Logo/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link ms-3 active" aria-current="page" href="#">
              <Paragraph $textColor>Home</Paragraph>
            </a>
            <a className="nav-link ms-3" href="#">
              <Paragraph $p2>Portofolio</Paragraph>
            </a>
            <a className="nav-link ms-3" href="#">
            <Paragraph $p2>Curiculum Vitae</Paragraph>
            </a>
            <a className="nav-link ms-3" href="#">
            <Paragraph $p2>Blog</Paragraph>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
