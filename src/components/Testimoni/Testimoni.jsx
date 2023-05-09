import Title from "../../elements/Title";
import styles from "./Testimoni.module.css";
import CardTestimoni from "../../elements/CardTestimoni";
import TextColor from "../../elements/TextColor";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {CgPlayTrackNextR, CgPlayTrackPrevR} from "react-icons/cg"
import { useState } from "react";
import { IconContext } from "react-icons";

const Testimoni = () => {

  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    speed: 500,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScrool: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 976,
        settings: {
          slidesToShow: 2,
          slidesToScrool: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScrool: 1,
        }
      }
    ]
  }

  return (
    <div className={styles.testimoni}>
      <div className="container">
        <div className={styles.title}>
          <div className="row">
            <Title $h3>Ulasan <TextColor>Pelanggan</TextColor> </Title>
            <Title $h2><TextColor $bold>Testimoni</TextColor> Pelanggan</Title>
          </div>
          <div className="row">
            <Slider ref={setSliderRef} {...sliderSettings}>
              {dataTestimoni.map((testimoni, index) =>
                <div className="col-md-4" key={index}>
                  <CardTestimoni
                    name={testimoni.name}
                    job={testimoni.job}
                    testimoni={testimoni.testimoni}
                  />
                </div>
              )}
            </Slider>
            <div>
            <div className="float-end" style={{cursor: 'pointer'}}>
            <IconContext.Provider value={{ color: "#E62872", size:"2rem", className: "global-class-name" }}>
              <div>
                <CgPlayTrackPrevR onClick={sliderRef?.slickPrev}/>
                <CgPlayTrackNextR onClick={sliderRef?.slickNext}/>
              </div>
            </IconContext.Provider>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const dataTestimoni = [
  {
    name:"Agus Eliadi",
    job:"CEO PT. Cahaya Bangsa",
    testimoni:"Saya sangat terkesan dengan hasil kerja dari frontend developer ini. Desain website yang dibuat sangat menarik dan responsif di berbagai jenis perangkat. Selain itu, developer ini juga sangat profesional dalam menjalankan proyek. Saya sangat merekomendasikan untuk bekerja sama dengan developer ini."
  },
  {
    name:"Rani Nuryanti",
    job:"Digital Marketing CV. Technoin",
    testimoni:"Sangat puas dengan hasil kerja dari frontend developer ini. Desain website yang dibuat sesuai dengan ekspektasi kami dan kinerjanya sangat lancar. Selain itu, developer ini juga sangat responsif dan mudah untuk diajak bekerja sama disaat genting yang dibutuhkan. Terima kasih banyak!"
  },
  {
    name:"Eku Budi Santoso",
    job:"Manager PT. Bumi Indah Jaya",
    testimoni:"Kami bekerja sama dengan frontend developer ini untuk membangun website perusahaan kami. Hasilnya sangat memuaskan. Developer ini sangat ahli dalam HTML, CSS, dan JavaScript serta memahami tren terbaru dalam desain web. Kami pasti akan merekomendasikan untuk bekerja sama lagi."
  },
  {
    name:"Fahmi Ditianto",
    job:"CMO PT. Bangkit Nusantara",
    testimoni:"Sangat puas dengan hasil kerja dari frontend developer ini. Desain website yang dibuat sesuai dengan ekspektasi kami dan kinerjanya sangat lancar. Selain itu, developer ini juga sangat responsif dan mudah untuk diajak bekerja sama disaat genting yang dibutuhkan. Terima kasih banyak!"
  },
  {
    name:"Itsna Hayu Fadilah",
    job:"Owner PT. Emdek Group",
    testimoni:"Frontend developer ini sangat berdedikasi dan ahli dalam pekerjaannya. Dia membantu kami memperbarui website perusahaan kami dengan desain yang lebih modern dan responsif. Developer ini juga sangat responsif dan selalu siap membantu ketika kami menghadapi masalah. Rekomendasi banget pokoknya"
  },
]

export default Testimoni;
