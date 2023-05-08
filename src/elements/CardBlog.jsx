import Popup from "reactjs-popup";
import Paragraph from "./Paragraph";
import Title from "./Title";
import Button from "./Button";

const CardBlog = ({ img, title, tanggal, artikel }) => {
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
        <Title $h3>
          {title}
        </Title>
        <Paragraph $p3>{tanggal}</Paragraph>
        <Paragraph
          $p3
          className="card-text"
          style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3, overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {artikel}
        </Paragraph>{" "}
        <br />
        <Popup
        modal
        trigger={<Button style={{margin:"0"}}>Baca Selengkapnya</Button>}
        position={"center center"}
        >
          <div style={{ overflowY: "auto", maxHeight: "85vh" }}>
            <br />
            <Title $h3>{title}</Title>
            <Paragraph $p3>{tanggal}</Paragraph> <br />
            <Paragraph $p2>{artikel}</Paragraph>
          </div>
          <br />
        </Popup>
      </div>
    </div>
  );
};

export default CardBlog;
