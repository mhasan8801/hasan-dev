import Logo from '../../elements/Logo'
import Github from '../../assets/icons/github.png'
import Instagram from '../../assets/icons/instagram.png'
import Linkedin from '../../assets/icons/linkedin.png'
import styles from './Footer.module.css'
import Paragraph from '../../elements/Paragraph'

const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className="container text-center">
                <Logo/>
                <div className="row">
                    <div className="col">
                        <a href="#" id={styles.a}><Paragraph $p2>Home</Paragraph></a>
                        <a href="#" id={styles.a}><Paragraph $p2>Portfolio</Paragraph></a>
                        <a href="#" id={styles.a}><Paragraph $p2>Blog</Paragraph></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={Github} alt="Github" id={styles.img}/>
                        <img src={Instagram} alt="Instagram" id={styles.img}/>
                        <img src={Linkedin} alt="Linkedin" id={styles.img}/>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Footer;