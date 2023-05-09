import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import Paragraph from "./Paragraph";
import Title from "./Title";
import Button from "../elements/Button";
import { useState } from "react";

const CardService = ({ img, title, description, skills }) => {

  return (
    <div
      className="card shadow"
      style={{
        backgroundColor: "transparent",
        border: "none",
        padding: "2rem 1rem 1rem",
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
        <div>
          <Popup
            modal
            trigger={<Button style={{margin:"0"}}>Baca Selengkapnya</Button>}
            position="center center"
          >
            <div className="text-center">
              <br />
              <Title $h3>{title}</Title>
              <Paragraph $p2>{description}</Paragraph>
            </div> <br />
              <ul>
                {Object.values(skills).map((skill, index) => (
                  <li key={index}><Paragraph $p3>{skill}</Paragraph></li>
                ))}
              </ul>
            <br />
          </Popup>
        </div>
      </div>
    </div>
  );
};

const styles = {
  popup: {
    padding: '2rem 0'
  },
};

export default CardService;
