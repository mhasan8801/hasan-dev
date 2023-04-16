import Title from "../../elements/Title";
import Button from "../../elements/Button";
import styles from "./Testimoni.module.css";
import CardTestimoni from "../../elements/CardTestimoni";

const Testimoni = () => {
  return (
    <div className={styles.testimoni}>
      <div className="container">
        <div className={styles.title}>
          <div className="row">
            <Title $h3>Ulasan Pelanggan</Title>
            <Title $h2>Testimoni Pelanggan</Title>
          </div>
          <div className="row">
            <div className="col-md-4">
              <CardTestimoni
                name="Marcos Alonso"
                job="Influencer"
                testimoni="Saya sangat terkesan dengan hasil kerja yang diberikan. Pekerjaannya sangat rapi dan detail, mampu menghasilkan website yang modern dan user-friendly. Selain itu, komunikasi yang baik dan respon yang cepat membuat proses pengerjaan berjalan dengan lancar. Terima kasih banyak atas kerja kerasnya!"
              />
            </div>
            <div className="col-md-4">
              <CardTestimoni
                name="Marcos Alonso"
                job="Influencer"
                testimoni="Saya sangat terkesan dengan hasil kerja yang diberikan. Pekerjaannya sangat rapi dan detail, mampu menghasilkan website yang modern dan user-friendly. Selain itu, komunikasi yang baik dan respon yang cepat membuat proses pengerjaan berjalan dengan lancar. Terima kasih banyak atas kerja kerasnya!"
              />
            </div>
            <div className="col-md-4">
              <CardTestimoni
                name="Marcos Alonso"
                job="Influencer"
                testimoni="Saya sangat terkesan dengan hasil kerja yang diberikan. Pekerjaannya sangat rapi dan detail, mampu menghasilkan website yang modern dan user-friendly. Selain itu, komunikasi yang baik dan respon yang cepat membuat proses pengerjaan berjalan dengan lancar. Terima kasih banyak atas kerja kerasnya!"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
