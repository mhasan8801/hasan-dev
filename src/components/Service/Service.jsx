import styles from "./Service.module.css";
import Title from "../../elements/Title.jsx";
import Paragraph from "../../elements/Paragraph";
import CardService from "../../elements/CardService";
import WebDesign from "../../assets/icons/web-design.png";
import MobileApp from "../../assets/icons/mobile-app.png";
import SEO from "../../assets/icons/seo.png";
import TextColor from "../../elements/TextColor";
import Popup from "reactjs-popup";

const Service = () => {

  return (
    <div className={styles.service}>
      <div className="container">
        <div className={styles.title}>
            <Title $h2>Layanan</Title>
            <Title $h3><TextColor>Jasa</TextColor> yang Saya Berikan</Title>
        </div>
        <div className="row" id={styles.row}>
            {dataServices.map((service, index) => 
              <div className="col-sm-4">
                <CardService
                img={service.img}
                title={service.title}
                description={service.description}
                skills={service.skills}
                />
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

let dataServices = [
  {
    img: WebDesign,
    title:"Web Design",
    description:"Membantu anda dalam merancang dan mengembangkan situs web yang menarik dan responsif dalam berbagai perangkat",
    skills : {
      1 : "Merancang tampilan situs web sesuai permintaan",
      2 : "Mendesain tampilan web responsif berbagai perangkat",
      3 : "Melakukan optimisasi kecepatan situs web",
      4 : "Konsultasi dan rekomendasi terkait User Experience dan Layout Design",
      5 : "Konsultasi dan rekomendasi terkait pemilihan warna, tipografi, dan gaya visual untuk situs web"
    }
  },
  {
    img: MobileApp,
    title:"Mobile App Design",
    description:"Membantu anda merancang dan mengembangkan aplikasi seluler yang menarik dengan tampilan antarmuka pengguna yang intuitif",
    skills : {
      1 : "Merancang antarmuka pengguna (UI) yang intuitif dan menarik untuk aplikasi mobile.",
      2 : "Membantu dalam menganalisis kebutuhan untuk aplikasi mobile",
      3 : "Membangun dan mengembangkan aplikasi mobile dengan menggunakan trend dan konsep design yang sesuai dengan perkembangan",
      4 : "Konsultasi dan rekomendasi terkait User Experience dan Layout Design aplikasi movile",
      5 : "Konsultasi dan rekomendasi terkait pemilihan warna, tipografi, dan gaya visual untuk aplikasi mobile"
    }
  },
  {
    img: SEO,
    title:"Search Engine Optimization",
    description:"Membantu anda meningkatkan visibilitas website di mesin pencari agar lebih mudah ditemukan oleh calon pelanggan dan klien potensial.",
    skills : {
      1 : "Memastikan konten situs web klien dioptimalkan dengan baik untuk kata kunci yang relevan dan berkinerja tinggi.",
      2 : "Menganalisis kata kunci yang relevan dan berkinerja tinggi untuk situs web klien.",
      3 : "Melakukan audit situs web klien untuk mengidentifikasi masalah teknis dan kesalahan SEO.",
      4 : "Membangun tautan berkualitas tinggi untuk situs web klien untuk meningkatkan otoritas domain dan peringkat mesin pencari.",
      5 : "Menganalisis strategi SEO pesaing untuk mengidentifikasi peluang baru untuk klien Anda."
    }
  }
]

export default Service;
