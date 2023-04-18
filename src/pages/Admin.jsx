import Dashboard from "../components/Dashboard/Dashboard";
import { Route, Routes } from 'react-router-dom'
import Sidebar from "../components/Sidebar/Sidebar";

const AdminPanel = () => {
    return(
        <>
            <div className="container-fluid bg-secondary min-vh-100">
                <div className="row">
                    <div className="col-2 bg-white vh-100">
                        <Sidebar/>
                    </div>
                    <div className="col">
                        <Routes>
                            <Route path='/' element={<Dashboard/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPanel;