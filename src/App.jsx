import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'typeface-roboto'
import Button from './elements/Button'
import Title from './elements/Title'
import Paragraph from './elements/Paragraph'

function App() {

  return (
    <div className="App">
      <div className="title">
        <Title>Hasan</Title>
        <Title $h2>Hasan</Title>
        <Title $h3>Hasan</Title>
      </div>
      <div className="paragraph">
        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Paragraph>
        <Paragraph $p2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Paragraph>
        <Paragraph $p3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Paragraph>
      </div>
      <div className="button">
        <Button>Normal</Button>
        <Button $primary>Primary Button</Button>
      </div>
    </div>
  )
}

export default App
