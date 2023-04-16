import Paragraph from "./Paragraph";
import Title from "./Title";

const CardTestimoni = ({ name, job, testimoni }) => {
  return (
    <div
      className="card shadow"
      style={{ backgroundColor: "transparent", border: "none", borderRadius:'20px', margin:'1rem 0' }}
    >
      <div className="card-body">
        <Title $h3 className="card-title">
          {name}
        </Title>
        <Paragraph className="card-subtitle mb-2 text-body-secondary">
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
