import Paragraph from "./Paragraph";
import Title from "./Title";
import Color from "./Color";

const CardTestimoni = ({ name, job, testimoni }) => {
  return (
    <div
      className="card shadow"
      style={{
        backgroundColor: "transparent",
        borderColor: `${Color.button}`,
        borderRadius: "20px",
        margin: "1rem 0.5rem",
      }}
    >
      <div className="card-body">
        <Title $h3 style={{ color: `${Color.primary}` }}>
          {name}
        </Title>
        <Paragraph className="mb-2 text-body-secondary">
          {job}
        </Paragraph>{" "}
        <br />
        <Paragraph $p3 className="card-text">
          {testimoni}
        </Paragraph>
      </div>
    </div>
  );
};

export default CardTestimoni;
