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

function App() {

  return (
      <div>
        <Navbar/>
        <Hero/>
        <About/>
      </div>
  )
}

export default App
