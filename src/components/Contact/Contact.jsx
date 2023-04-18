import Title from "../../elements/Title";
import Paragraph from "../../elements/Paragraph";
import styles from "./Contact.module.css";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import Email from "../../assets/icons/email.png";
import Address from "../../assets/icons/address.png";
import Phone from "../../assets/icons/phone.png";

const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6" id={styles.colleft}>
            <Title $h3>Hubungi Saya</Title>
            <Paragraph $p2>
              Jika anda mencari seorang Frontend Developer yang berdedikasi dan
              mampu memberikan hasil terbaik untuk proyek anda, jangan ragu
              untuk menghubungi saya.
            </Paragraph>
            <div className="row" id={styles.kontak}>
              <div className="col-1">
                <img src={Email} alt="Email" />
              </div>
              <div className="col-11 ps-3">
                <Paragraph $p3>hasanmuhammad197@gmail.com</Paragraph>
              </div>
            </div>
            <div className="row" id={styles.kontak}>
              <div className="col-1">
                <img src={Address} alt="Address" />
              </div>
              <div className="col-11 ps-3">
                <Paragraph $p3>
                  Dusun Ky. Hasan Kerpangan Leces Probolinggo
                </Paragraph>
              </div>
            </div>
            <div className="row" id={styles.kontak}>
              <div className="col-1">
                <img src={Phone} alt="Phone" />
              </div>
              <div className="col-11 ps-3">
                <Paragraph $p3>+62 8223 2139 882</Paragraph>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-md-7">
              <Input type="text" placeholder="Nama Lengkap*" />
              <Input type="email" placeholder="Email*" />
              <Input type="text" placeholder="Pekerjaan*" />
              <textarea
                className="form-control"
                placeholder="Pesan*"
                id="floatingTextarea"
                style={{height:'10rem'}}
              ></textarea>
              <Button $primary>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
