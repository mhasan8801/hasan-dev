import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Title from "../elements/Title";
import ImgPortfolio from "../assets/images/Portfolio.png";
import Paragraph from "../elements/Paragraph";
import CardMyPortfolio from "../elements/CardMyPortfolio";
import TextColor from "../elements/TextColor";

const MyPortfolio = () => {
  return (
    <div className="myportfolio">
      <Navbar />
      <div className="container">
        <div className="header text-center pt-4">
          <Title $h2>Portofolio Sukses Saya</Title>
          <div className="row">
            <div className="col">
              <a href="#" style={styles.a}><TextColor $light>All</TextColor></a>
              <a href="#" style={styles.a}><Paragraph $p2>Website</Paragraph></a>
              <a href="#" style={styles.a}><Paragraph $p2> Mobile</Paragraph></a>
              <a href="#" style={styles.a}><Paragraph $p2>Desktop</Paragraph></a>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-md-4">
              <CardMyPortfolio
                img={ImgPortfolio}
                title="Find House"
                description="Find House is a mobile application that helps users to find their dream home easily and quickly. Users can search for properties based on location, price range, and property type"
                linkDemo="#"
                linkGithub="#"
              />
            </div>
            <div className="col-md-4">
              <CardMyPortfolio
                img={ImgPortfolio}
                title="Find House"
                description="Find House is a mobile application that helps users to find their dream home easily and quickly. Users can search for properties based on location, price range, and property type"
                linkDemo="#"
                linkGithub="#"
              />
            </div>
            <div className="col-md-4">
              <CardMyPortfolio
                img={ImgPortfolio}
                title="Find House"
                description="Find House is a mobile application that helps users to find their dream home easily and quickly. Users can search for properties based on location, price range, and property type"
                linkDemo="#"
                linkGithub="#"
              />
            </div>
            <div className="col-md-4">
              <CardMyPortfolio
                img={ImgPortfolio}
                title="Find House"
                description="Find House is a mobile application that helps users to find their dream home easily and quickly. Users can search for properties based on location, price range, and property type"
                linkDemo="#"
                linkGithub="#"
              />
            </div>
            <div className="col-md-4">
              <CardMyPortfolio
                img={ImgPortfolio}
                title="Find House"
                description="Find House is a mobile application that helps users to find their dream home easily and quickly. Users can search for properties based on location, price range, and property type"
                linkDemo="#"
                linkGithub="#"
              />
            </div>
            <div className="col-md-4">
              <CardMyPortfolio
                img={ImgPortfolio}
                title="Find House"
                description="Find House is a mobile application that helps users to find their dream home easily and quickly. Users can search for properties based on location, price range, and property type"
                linkDemo="#"
                linkGithub="#"
              />
            </div>
            <div className="col-md-4">
              <CardMyPortfolio
                img={ImgPortfolio}
                title="Find House"
                description="Find House is a mobile application that helps users to find their dream home easily and quickly. Users can search for properties based on location, price range, and property type"
                linkDemo="#"
                linkGithub="#"
              />
            </div>
            <div className="col-md-4">
              <CardMyPortfolio
                img={ImgPortfolio}
                title="Find House"
                description="Find House is a mobile application that helps users to find their dream home easily and quickly. Users can search for properties based on location, price range, and property type"
                linkDemo="#"
                linkGithub="#"
              />
            </div>
            <div className="col-md-4">
              <CardMyPortfolio
                img={ImgPortfolio}
                title="Find House"
                description="Find House is a mobile application that helps users to find their dream home easily and quickly. Users can search for properties based on location, price range, and property type"
                linkDemo="#"
                linkGithub="#"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
    a: {
        textDecoration: 'none',
        margin: '3rem 1rem'
    }
}

export default MyPortfolio;
