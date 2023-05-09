import 'bootstrap/dist/css/bootstrap.min.css'
import 'typeface-roboto'
import './App.css'
import Landingpage from './pages/Landingpage'
import MyPortfolio from './pages/MyPortfolio'
import MyBlog from './pages/MyBlog/MyBlog'
import CurciulumVitae from './pages/CuriculumVitae'
import { Route, Routes } from 'react-router-dom'
import AdminPanel from './pages/admin/Layout/Admin'
import Dashboard from './pages/admin/Dashboard/Dashboard'
import Portfolio from './components/Portfolio/Portfolio'
import PortfolioAdmin from './pages/admin/PortfolioAdmin/PortfolioAdmin'
import Login from './pages/admin/Login/Login'

function App() {

  return (
      <>
        <Routes>
          <Route index element={<Landingpage/>}/>
          <Route path='portofolio' element={<MyPortfolio/>}/>
          <Route path='curiculumvitae' element={<CurciulumVitae/>}/>
          <Route path='blog' element={<MyBlog/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='admin/*' element={<AdminPanel/>}/>
        </Routes>
      </>
  )
}

export default App
