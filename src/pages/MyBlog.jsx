import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Title from "../elements/Title";
import ImgPortfolio from "../assets/images/Portfolio.png";
import Paragraph from "../elements/Paragraph";
import CardMyPortfolio from "../elements/CardMyPortfolio";
import TextColor from "../elements/TextColor";
import ImageBlog from "../assets/images/blog.png";
import CardBlog from "../elements/CardBlog";

const MyBlog = () => {
  return (
    <div className="myblog">
      <Navbar />
      <div className="container">
        <div className="header text-center pt-4">
          <Title $h2>Blog Saya</Title>
          <div className="row">
            <div className="col">
              <a href="#" style={styles.a}><TextColor $light>All</TextColor></a>
              <a href="#" style={styles.a}><Paragraph $p2>Teknologi</Paragraph></a>
              <a href="#" style={styles.a}><Paragraph $p2> Tutorial</Paragraph></a>
              <a href="#" style={styles.a}><Paragraph $p2>Tips & Trik</Paragraph></a>
            </div>
          </div>
        </div>
        <div className="content">
        <div className="row">
            <div className="col-md-4">
                <CardBlog
                img={ImageBlog}
                title="Web Design"
                kategory="Teknologi"
                tanggal="29 Maret 2023"
                artikel="Perkembangan teknologi yang semakin pesat memberikan dampak besar pada kehidupan kita. Dengan teknologi, kita bisa mengakses informasi dengan mudah, berkomunikasi dengan orang yang berada di tempat yang jauh, serta melakukan pekerjaan dengan lebih efisien dan cepat."
                linkMore="#"
                />
            </div>
            <div className="col-md-4">
            <CardBlog
                img={ImageBlog}
                title="Web Design"
                kategory="Teknologi"
                tanggal="29 Maret 2023"
                artikel="Perkembangan teknologi yang semakin pesat memberikan dampak besar pada kehidupan kita. Dengan teknologi, kita bisa mengakses informasi dengan mudah, berkomunikasi dengan orang yang berada di tempat yang jauh, serta melakukan pekerjaan dengan lebih efisien dan cepat."
                linkMore="#"
                />
            </div>
            <div className="col-md-4">
            <CardBlog
                img={ImageBlog}
                title="Web Design"
                kategory="Teknologi"
                tanggal="29 Maret 2023"
                artikel="Perkembangan teknologi yang semakin pesat memberikan dampak besar pada kehidupan kita. Dengan teknologi, kita bisa mengakses informasi dengan mudah, berkomunikasi dengan orang yang berada di tempat yang jauh, serta melakukan pekerjaan dengan lebih efisien dan cepat."
                linkMore="#"
                />
            </div>
            <div className="col-md-4">
                <CardBlog
                img={ImageBlog}
                title="Web Design"
                kategory="Teknologi"
                tanggal="29 Maret 2023"
                artikel="Perkembangan teknologi yang semakin pesat memberikan dampak besar pada kehidupan kita. Dengan teknologi, kita bisa mengakses informasi dengan mudah, berkomunikasi dengan orang yang berada di tempat yang jauh, serta melakukan pekerjaan dengan lebih efisien dan cepat."
                linkMore="#"
                />
            </div>
            <div className="col-md-4">
            <CardBlog
                img={ImageBlog}
                title="Web Design"
                kategory="Teknologi"
                tanggal="29 Maret 2023"
                artikel="Perkembangan teknologi yang semakin pesat memberikan dampak besar pada kehidupan kita. Dengan teknologi, kita bisa mengakses informasi dengan mudah, berkomunikasi dengan orang yang berada di tempat yang jauh, serta melakukan pekerjaan dengan lebih efisien dan cepat."
                linkMore="#"
                />
            </div>
            <div className="col-md-4">
            <CardBlog
                img={ImageBlog}
                title="Web Design"
                kategory="Teknologi"
                tanggal="29 Maret 2023"
                artikel="Perkembangan teknologi yang semakin pesat memberikan dampak besar pada kehidupan kita. Dengan teknologi, kita bisa mengakses informasi dengan mudah, berkomunikasi dengan orang yang berada di tempat yang jauh, serta melakukan pekerjaan dengan lebih efisien dan cepat."
                linkMore="#"
                />
            </div>
            <div className="col-md-4">
                <CardBlog
                img={ImageBlog}
                title="Web Design"
                kategory="Teknologi"
                tanggal="29 Maret 2023"
                artikel="Perkembangan teknologi yang semakin pesat memberikan dampak besar pada kehidupan kita. Dengan teknologi, kita bisa mengakses informasi dengan mudah, berkomunikasi dengan orang yang berada di tempat yang jauh, serta melakukan pekerjaan dengan lebih efisien dan cepat."
                linkMore="#"
                />
            </div>
            <div className="col-md-4">
            <CardBlog
                img={ImageBlog}
                title="Web Design"
                kategory="Teknologi"
                tanggal="29 Maret 2023"
                artikel="Perkembangan teknologi yang semakin pesat memberikan dampak besar pada kehidupan kita. Dengan teknologi, kita bisa mengakses informasi dengan mudah, berkomunikasi dengan orang yang berada di tempat yang jauh, serta melakukan pekerjaan dengan lebih efisien dan cepat."
                linkMore="#"
                />
            </div>
            <div className="col-md-4">
            <CardBlog
                img={ImageBlog}
                title="Web Design"
                kategory="Teknologi"
                tanggal="29 Maret 2023"
                artikel="Perkembangan teknologi yang semakin pesat memberikan dampak besar pada kehidupan kita. Dengan teknologi, kita bisa mengakses informasi dengan mudah, berkomunikasi dengan orang yang berada di tempat yang jauh, serta melakukan pekerjaan dengan lebih efisien dan cepat."
                linkMore="#"
                />
            </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
    a: {
        textDecoration: 'none',
        margin: '3rem 1rem'
    }
}

export default MyBlog;
