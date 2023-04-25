import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import Paragraph from "./Paragraph";
import Title from "./Title";
import Button from "../elements/Button";

const CardService = ({ img, title, description, linkMore, onClick }) => {
  return (
    <div
      className="card shadow"
      style={{
        backgroundColor: "transparent",
        border: "none",
        padding: "2rem 1rem",
        margin: "1rem 0",
      }}
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
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Paragraph>{" "}
        <br />
        <div className={styles.popup}>
          <Popup
            modal
            trigger={<Button>Baca Selengkapnya</Button>}
            position="center center"
          >
            <Title $h3>{title}</Title>
            <Paragraph $p3>{description}</Paragraph>
          </Popup>
        </div>
      </div>
    </div>
  );
};

const styles = {
  popup: {
    backgroundColor: "red",
  },
};

export default CardService;
