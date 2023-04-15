import Button from "../../elements/Button";
import Color from "../../elements/Color";
import Paragraph from "../../elements/Paragraph";
import Title from "../../elements/Title";
import HasanHero from "../../assets/images/hasan-hero.png"
import styles from './Hero.module.css'
import TextColor from "../../elements/TextColor";

const Hero = () => {
    return(
        <div className={styles.hero}>
            <div className="container">
            <div className="row" id={styles.row}>
                <div className="col-sm-6">
                    <Title $h3>Selamat 
                        <TextColor> Datang</TextColor> 
                    </Title>
                    <Title $h2>Saya 
                        <TextColor $bold> M. Hasan</TextColor> 
                    </Title>
                    <Title $h2> 
                        <TextColor $bold> Frontend </TextColor> 
                    Developer
                    </Title>
                    <Paragraph $p2>Saya menekuni dunia teknologi dan berbasis di Probolinggo. Saya menempatkan dedikasi penuh pada pekerjaan yang saya lakukan.</Paragraph> <br />
                    <Button $primary>Hire Me</Button>
                </div>
                <div className="col-sm-6">
                    <img src={HasanHero} alt="Hasan" className={styles.images}/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Hero;