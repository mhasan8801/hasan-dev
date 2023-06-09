import Paragraph from "./Paragraph";
import TextColor from "./TextColor";
import Title from "./Title";

const CardMyPortfolio = ({ img, title, description, linkDemo, linkGithub }) => {
  return (
    <div className="card shadow" style={{ border: "none", margin:'1rem 0' }}>
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        
        <Title $h3 className="card-title">
          {title}
        </Title>
        <Paragraph $p3 className="card-text">
          {description}
        </Paragraph>{" "}
        <br />
        <a
          href={`https://${linkDemo}`}
          className="card-link text-start"
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <TextColor $light>Demo Langsung</TextColor>{" "}
        </a>
        <a
          href={`https://${linkGithub}`}
          className="card-link float-end"
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TextColor $light>Lihat di Github</TextColor>
        </a>
      </div>
    </div>
  );
};

export default CardMyPortfolio;
