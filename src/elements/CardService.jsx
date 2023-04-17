import Paragraph from "./Paragraph";
import Title from "./Title";

const CardService = ({ img, title, description, linkMore }) => {
  return (
    <div
      className="card shadow"
      style={{ backgroundColor: "transparent", border: "none",padding:'2rem 1rem', margin:'1rem 0' }}
    >
      <img
        src={img}
        className="card-img-top"
        alt={title}
        style={{ width: "5rem" }}
      />
      <div className="card-body" style={{ padding: "1rem 0.5rem" }}>
        <Title $h3 className="card-title">
          {title}
        </Title>
        <Paragraph
          $p3
          className="card-text"
          style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3, overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {description}
        </Paragraph>{" "}
        <br />
        <a href={linkMore} className="card-link" style={{ textDecoration: "none" }}>
          Baca Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default CardService;
