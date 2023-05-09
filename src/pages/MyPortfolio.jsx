import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Title from "../elements/Title";
import ImgPortfolio from "../assets/images/Portfolio.png";
import Paragraph from "../elements/Paragraph";
import CardMyPortfolio from "../elements/CardMyPortfolio";
import TextColor from "../elements/TextColor";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useEffect } from "react";

//query graphql
export const getPortfolioList = gql`
  query QueryPortfolio {
    portfolio {
      id
      title
      img
      description
      linkDemo
      linkGithub
    }
  }
`;

const MyPortfolio = () => {

  const { data, loading, error } = useQuery(getPortfolioList);
  const [listPortfolio, setListPortfolio] = useState([]);

  useEffect(() => {
    console.log("loading ", loading); //cek fetch data masih berlangsung/selesai
    console.log("data gql : ", data); //cek fetch data yang diminta
    console.log("error : ", error); //cek jika ada error

    // mengecek proses fetch data
    if (!loading && error !== undefined) {
      
      setListPortfolio(data.portfolio); //set data ke usestate
    }
  });

  return (
    <div className="myportfolio">
      <Navbar />
      <div className="container">
        <div className="header text-center pt-4">
          <Title $h2>Portofolio Sukses Saya</Title>
        </div>
        <div className="content">
          <div className="row">
            {loading ? (
              <p>Loading</p>
            ) : (
              data?.portfolio.map((item) => (
                  <div className="col-md-4" key={item.id}>
                    <CardMyPortfolio
                      img={item.img}
                      title={item.title}
                      description={item.description}
                      linkDemo={item.linkDemo}
                      linkGithub={item.linkGithub}
                    />
                  </div>
              ))
            )}
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
