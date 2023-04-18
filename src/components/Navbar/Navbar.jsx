import Button from "../../elements/Button";
import Logo from "../../elements/Logo";
import Paragraph from "../../elements/Paragraph";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md shadow" id={styles.navbar}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Logo />
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
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/portofolio" activeClassName="active">
            Portofolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/curiculumvitae" activeClassName="active">
            Curiculum Vitae
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active">
            Blog
          </NavLink>
        </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
