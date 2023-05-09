import Title from "../../elements/Title";
import Paragraph from "../../elements/Paragraph";
import styles from "./Contact.module.css";
import Button from "../../elements/Button";
import Email from "../../assets/icons/email.png";
import Address from "../../assets/icons/address.png";
import Phone from "../../assets/icons/phone.png";
import emailJs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";

const Contact = () => {
  const [isSend, setIsSend] = useState(false);

  const form = useRef();

  const handleSend = (e) => {
    e.preventDefault();

    emailJs
      .sendForm(
        "service_hyshrce",
        "template_mituh62",
        form.current,
        "5OM9Ey0HYI2WbMWdc"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSend(true);
          setTimeout(() => setIsSend(false), 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

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
              <form action="" ref={form} onSubmit={handleSend}>
                <div className="my-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama Lengkap*"
                    name="user_name"
                  />
                </div>
                <div className="my-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email*"
                    name="user_email"
                  />
                </div>
                <div className="my-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pekerjaan*"
                    name="user_job"
                  />
                </div>
                <textarea
                  className="form-control my-3"
                  name="message"
                  placeholder="Pesan*"
                  id="floatingTextarea"
                  style={{ height: "10rem" }}
                ></textarea>
                {isSend && <p style={{ color: "green" }}>Pesan Terkirim!</p>}
                <Button $primary value="Send">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
