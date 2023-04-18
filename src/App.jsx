import 'bootstrap/dist/css/bootstrap.min.css'
import 'typeface-roboto'
import './App.css'
import Landingpage from './pages/Landingpage'
import MyPortfolio from './pages/MyPortfolio'
import MyBlog from './pages/MyBlog'
import CurciulumVitae from './pages/CuriculumVitae'
import { Route, Routes } from 'react-router-dom'
import AdminPanel from './pages/Admin'

function App() {

  return (
      <>
        <Routes>
          <Route index element={<Landingpage/>}/>
          <Route path='portofolio' element={<MyPortfolio/>}/>
          <Route path='curiculumvitae' element={<CurciulumVitae/>}/>
          <Route path='blog' element={<MyBlog/>}/>
          <Route path='admin' element={<AdminPanel/>}/>
        </Routes>
      </>
  )
}

export default App
