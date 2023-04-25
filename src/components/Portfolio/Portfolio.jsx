import Title from "../../elements/Title";
import Button from "../../elements/Button"
import CardMyPortfolio from "../../elements/CardMyPortfolio";
import ImgPortfolio from "../../assets/images/Portfolio.png"
import styles from "./Portfolio.module.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
    return(
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
                                <Button $primary className="float-end">Semua Project</Button>
                            </Link>
                        </div>
                    </div>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;