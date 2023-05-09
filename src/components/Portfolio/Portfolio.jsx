import Title from "../../elements/Title";
import Button from "../../elements/Button";
import CardMyPortfolio from "../../elements/CardMyPortfolio";
import ImgPortfolio from "../../assets/images/Portfolio.png";
import styles from "./Portfolio.module.css";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useEffect } from "react";

//query graphql
export const getLastPortfolio = gql`
query PickPortfolio3 {
  portfolio_aggregate(limit: 3, order_by: { id: desc }) {
    nodes {
      id
      title
      description
      img
      linkDemo
      linkGithub
    }
  }
}
`;

const Portfolio = () => {
  const { data, loading, error } = useQuery(getLastPortfolio);
  const [listPortfolio, setListPortfolio] = useState([]);

  useEffect(() => {
    console.log("loading ", loading); //cek fetch data masih berlangsung/selesai
    console.log("data gql : ", data); //cek fetch data yang diminta
    console.log("error : ", error); //cek jika ada error

    // mengecek proses fetch data
    if (!loading && error === undefined) {
      
      setListPortfolio(data.portfolio); //set data ke usestate
    }
  }, [loading, data, error]);

  return (
    <div className={styles.portfolio}>
      <div className="container">
        <div className={styles.title}>
          <div className="row">
            <div className="col-md-6 text-start">
              <div>
                <Title $h3>Project Terakhir</Title>
                <Title $h2>Portofolio Saya</Title>
              </div>
            </div>
            <div className="col-md-6">
              <Link to="/portofolio">
                <Button $primary className="float-end">
                  Semua Project
                </Button>
              </Link>
            </div>
          </div>
          <div className="row">
            {loading ? (
              <p>Loading</p>
            ) : (
              data?.portfolio_aggregate.nodes?.map((item) => (
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
    </div>
  );
};

export default Portfolio;
