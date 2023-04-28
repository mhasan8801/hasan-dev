import Dashboard from "../Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import PortfolioAdmin from "../PortfolioAdmin/PortfolioAdmin";
import AddPortfolio from "../PortfolioAdmin/AddPortfolio";
import EditPortfolio from "../PortfolioAdmin/EditPortfolio";

const AdminPanel = () => {
  return (
    <>
      <div className="container-fluid bg-width min-vh-100">
        <div className="row">
          <div
            className="col-2 vh-100"
            style={{ backgroundColor: "var(--background)" }}
          >
            <Sidebar />
          </div>
          <div className="col">
            <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="portofolio" element={<PortfolioAdmin/>}/>
              <Route path="portofolio/add" element={<AddPortfolio/>}/>
              <Route path="portofolio/edit" element={<EditPortfolio/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
