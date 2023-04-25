import HasanAbout from "../../assets/images/hasan-about.png";
import About1 from "../../assets/images/about1.png";
import About2 from "../../assets/images/about2.png";
import styles from "./About.module.css";
import Title from "../../elements/Title";
import Paragraph from "../../elements/Paragraph";
import Button from "../../elements/Button";
import TextColor from "../../elements/TextColor";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <div className="container">
        <div className="row" id={styles.row}>
          <div className="col-sm-6" id={styles.colleft}>
            <div className="row row-cols-2">
              <div className="col-sm-7 row-cols-1">
                <img
                  src={HasanAbout}
                  alt="Hasan About"
                  className={styles.img}
                />
              </div>
              <div className="col-sm-5 row-cols-1">
                <div className="row row-cols-1">
                  <img
                    src={About1}
                    alt="Images About 1"
                    className="img-fluid"
                    id={styles.about1}
                  />
                  <img
                    src={About2}
                    alt="Images About 2"
                    className="img-fluid"
                    id={styles.about2}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6" id={styles.colright}>
            <Title $h3>
              Tentang <TextColor>Saya</TextColor>
            </Title>
            <Title $h2>
              Mewujudkan Website Yang{" "}
              <TextColor $bold>Menarik</TextColor> dan{" "}
              <TextColor $bold>Responsif</TextColor>
            </Title>
            <Paragraph $p3>
              Saya terus mempelajari teknologi terbaru dan trend terkini dalam
              industri, dan mengaplikasikannya dalam setiap proyek yang saya
              kerjakan. Saya percaya bahwa kualitas dan kinerja suatu website
              dapat memberikan dampak positif pada pengalaman pengguna dan
              kesuksesan bisnis Anda. <br />
              Saya senang bekerja dengan klien yang memiliki visi yang jelas dan
              berkolaborasi dengan tim yang berorientasi pada hasil.
            </Paragraph>{" "} <br />
            <Link to="curiculumvitae">
              <Button $primary> Download CV</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
