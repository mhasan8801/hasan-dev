import 'bootstrap/dist/css/bootstrap.min.css'
import 'typeface-roboto'
import Button from './elements/Button'
import Title from './elements/Title'
import Paragraph from './elements/Paragraph'
import Navbar from './components/Navbar'
import logo from './assets/images/logo.png'
import Hero from './components/Hero/Hero'
import './App.css'
import About from './components/About/About'
import Service from './components/Service/Service'
import MyPortfolio from './components/MyPortfolio/MyPortfolio'
import Testimoni from './components/Testimoni/Testimoni'
import Contact from './components/Contact/Contact'

function App() {

  return (
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Service/>
        <MyPortfolio/>
        <Testimoni/>
        <Contact/>
      </div>
  )
}

export default App
