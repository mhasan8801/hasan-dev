import Title from "../../elements/Title";
import Button from "../../elements/Button"
import CardMyPortfolio from "../../elements/CardMyPortfolio";
import ImgPortfolio from "../../assets/images/Portfolio.png"
import styles from "./MyPortfolio.module.css";

const MyPortfolio = () => {
    return(
        <div className={styles.myportfolio}>
            <div className="container">
                <div className={styles.title}>
                    <div className="row">
                        <div className="col-md-6 text-start">
                            <Title $h3>Project Terakhir</Title>
                            <Title $h2>Portofolio Saya</Title>
                        </div>
                        <div className="col-md-6">
                            <Button $primary className="float-end">Semua Project</Button>
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

export default MyPortfolio;