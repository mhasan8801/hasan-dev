import Logo from "../../../elements/Logo";
import { MdSpaceDashboard,MdLogout } from 'react-icons/md';
import Paragraph from "../../../elements/Paragraph";
import styles from "./Sidebar.module.css";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Sidebar = () => {
    return(
        <div className="sidebar p-2">
            <div className="logo d-flex justify-content-center pt-4">
                <Link to="/">
                    <Logo/>
                </Link>
            </div>
            <div className="content text-center">
                <div className="list-item py-2 my-2">
                    <div className="my-3" id={styles.bg}>
                        <Link to="/admin" className={styles.item}>
                            <Paragraph $textColor><MdSpaceDashboard />Dashboard</Paragraph>
                        </Link>
                    </div>
                    <div className="my-3">
                        <Link to="/admin/portofolio" className={styles.item}>
                            <Paragraph $textColor><AiOutlineFundProjectionScreen />Portofolio</Paragraph>
                        </Link>
                    </div>
                    <div className="my-3 ms-auto">
                        <Link to="" className={styles.item}>
                            <Paragraph $textColor><MdLogout />Sign Out</Paragraph>
                        </Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Sidebar;