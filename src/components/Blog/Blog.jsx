import styles from "./Blog.module.css";
import Title from "../../elements/Title.jsx";
import ImageBlog from "../../assets/images/blog.png";
import CardBlog from "../../elements/CardBlog";

const Blog = () => {
  return (
    <div className={styles.blog}>
      <div className="container">
        <div className={styles.title}>
            <Title $h2>Blog dan Artikel</Title>
            <Title $h3>Artikel Terakhir</Title>
        </div>
        <div className="row" id={styles.row}>
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
  );
};

export default Blog;
