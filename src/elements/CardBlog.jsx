import Paragraph from "./Paragraph";
import Title from "./Title";

const CardBlog = ({ img, title, kategory, tanggal, artikel, linkMore }) => {
  return (
    <div
      className="card shadow"
      style={{ backgroundColor: "transparent", border: "none", borderRadius:'20px', margin:'1rem 0' }}
    >
      <img
        src={img}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body" style={{ padding: "1rem 0.5rem" }}>
        <Paragraph $p2 className="text-start">{kategory}</Paragraph>
        <Paragraph $p2 className="float-end">{tanggal}</Paragraph>
        <Title $h3 className="card-title">
          {title}
        </Title>
        <Paragraph
          $p3
          className="card-text"
          style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3, overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {artikel}
        </Paragraph>{" "}
        <br />
        <a href={linkMore} className="card-link" style={{ textDecoration: "none" }}>
          Baca Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default CardBlog;
