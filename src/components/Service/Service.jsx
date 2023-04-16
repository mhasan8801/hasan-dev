import styles from "./Service.module.css";
import Title from "../../elements/Title.jsx";
import Paragraph from "../../elements/Paragraph";
import CardService from "../../elements/CardService";
import WebDesign from "../../assets/icons/web-design.png";
import MobileApp from "../../assets/icons/mobile-app.png";
import SEO from "../../assets/icons/seo.png";

const Service = () => {
  return (
    <div className={styles.service}>
      <div className="container">
        <div className={styles.title}>
            <Title $h2>Layanan</Title>
            <Title $h3>Jasa yang Saya Berikan</Title>
        </div>
        <div className="row" id={styles.row}>
            <div className="col">
                <CardService
                img={WebDesign}
                title="Web Design"
                description="Membantu anda dalam merancang dan mengembangkan situs web yang menarik dan responsif"
                linkMore="#"
                />
            </div>
            <div className="col">
            <CardService
                img={MobileApp}
                title="Mobile App Design"
                description="Membantu anda merancang dan mengembangkan aplikasi seluler yang menarik dengan tampilan antarmuka pengguna yang intuitif"
                linkMore="#"
                />
            </div>
            <div className="col">
            <CardService
                img={SEO}
                title="SEO Optimization"
                description="Membantu anda meningkatkan visibilitas website di mesin pencari agar lebih mudah ditemukan oleh calon pelanggan dan klien potensial."
                linkMore="#"
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Service;