import Title from "../../elements/Title";
import Button from "../../elements/Button";
import CardMyPortfolio from "../../elements/CardMyPortfolio";
import ImgPortfolio from "../../assets/images/Portfolio.png";
import styles from "./Portfolio.module.css";
import { Link } from "react-router-dom";

let dataPortfolio = [
  {
    img: ImgPortfolio,
    title: "Find House App",
    description:
      "Aplikasi pencarian properti yang memudahkan pengguna untuk menemukan rumah, apartemen, atau properti lainnya sesuai dengan kebutuhan dan preferensi mereka",
    linkDemo: "https://www.homes.com/",
    linkGithub: "https://github.com/mhasan8801/hasan-dev/",
  },
  {
    img: ImgPortfolio,
    title: "Find Car App",
    description:
      "Aplikasi pencarian Mobil yang memudahkan pengguna untuk menemukan Mobil, bengkel, atau properti lainnya sesuai dengan kebutuhan dan preferensi mereka",
    linkDemo: "https://www.cars.com/",
    linkGithub: "https://github.com/mhasan8801/hasan-dev/",
  },
  {
    img: ImgPortfolio,
    title: "Find Tour App",
    description:
      "Aplikasi pencarian Wisata yang memudahkan pengguna untuk menemukan tempat wisata, apartemen, atau properti lainnya sesuai dengan kebutuhan dan preferensi mereka",
    linkDemo: "https://www.blibli.com/",
    linkGithub: "https://github.com/mhasan8801/hasan-dev/",
  },
];

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className="container">
        <div className={styles.title}>
          <div className="row">
            <div className="col-md-6 text-start">
              <div>
                <Title $h3>Project Terakhir</Title>
                <Title $h2>Portofolio Saya</Title>
              </div>
            </div>
            <div className="col-md-6">
              <Link to="/portofolio">
                <Button $primary className="float-end">
                  Semua Project
                </Button>
              </Link>
            </div>
          </div>
          <div className="row">
            {dataPortfolio.map((data) => (
              <div className="col-md-4">
                <CardMyPortfolio
                  img={data.img}
                  title={data.title}
                  description={data.description}
                  linkDemo={data.linkDemo}
                  linkGithub={data.linkGithub}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
