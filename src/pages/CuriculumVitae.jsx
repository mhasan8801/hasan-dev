import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Title from "../elements/Title";
import TextColor from "../elements/TextColor";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.vite";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import English from "../assets/pdf/English.pdf";
import LKMM from "../assets/pdf/LKMM.pdf";
import FullColor from "../assets/pdf/FullColor.pdf";
import AtsFriendly from "../assets/pdf/AtsFriendly.pdf";
import { useState } from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const CuriculumVitae = () => {
  const [selectedPdf, setSelectedPdf] = useState(LKMM);

  const pdfList = [
    { name: "LKMM", file: LKMM },
    { name: "English", file: English },
    { name: "Ats Friendly", file: AtsFriendly },
    { name: "Full Color", file: FullColor },
  ];

  const handlePdf = (pdf) => {
    setSelectedPdf(pdf);
  };

  return (
    <div className="curiculumvitae">
      <Navbar />
      <div className="container">
        <div className="header text-center pt-4">
          <Title $h2>Curiculum Vitae</Title>
          <div className="row">
            <div className="">
              {pdfList.map((pdf) => (
                <a href="#" style={styles.a} key={pdf.name}>
                  <TextColor $light onClick={() => handlePdf(pdf.file)}>
                    {pdf.name}
                  </TextColor>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="content">
          <div style={styles.frame}>
            <Document file={selectedPdf}>
              <Page pageNumber={1} />
            </Document>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  a: {
    textDecoration: "none",
    margin: "3rem 1rem",
  },
  col: {
    padding: "5rem 0",
  },
  frame: {
    padding: "1rem 0",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default CuriculumVitae;
