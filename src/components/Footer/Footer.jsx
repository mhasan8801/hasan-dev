import Logo from "../../elements/Logo";
import Github from "../../assets/icons/github.png";
import Instagram from "../../assets/icons/instagram.png";
import Linkedin from "../../assets/icons/linkedin.png";
import styles from "./Footer.module.css";
import Paragraph from "../../elements/Paragraph";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container text-center">
        <Logo />
        <div className="row">
          <div className="{styles.col}">
            <Link to="/" id={styles.a}>
              <span >Home</span>
            </Link>
            <Link to="/portofolio" id={styles.a}>
              <span >Portofolio</span>
            </Link>
            <Link to="/curiculumvitae" id={styles.a}>
              <span >Curiculum Vitae</span>
            </Link>
            <Link to="/blog" id={styles.a}>
              <span >Blog</span>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={Github} alt="Github" id={styles.img} />
            <img src={Instagram} alt="Instagram" id={styles.img} />
            <img src={Linkedin} alt="Linkedin" id={styles.img} />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Footer;
