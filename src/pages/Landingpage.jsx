import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import MyPortfolio from "../components/MyPortfolio/MyPortfolio";
import Navbar from "../components/Navbar/Navbar";
import Service from "../components/Service/Service";
import Testimoni from "../components/Testimoni/Testimoni";


const Landingpage = () => {
    return(
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Service/>
            <MyPortfolio/>
            <Testimoni/>
            <Contact/>
            <Blog/>
            <Footer/>
        </>
    )
}

export default Landingpage;