import Logo from "../../../elements/Logo";
import { MdSpaceDashboard,MdLogout } from 'react-icons/md';
import Paragraph from "../../../elements/Paragraph";
import styles from "./Sidebar.module.css";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Sidebar = () => {
    return(
        <div className="sidebar p-2">
            <div className="logo d-flex justify-content-center">
                <Logo/>
            </div>
            <div className="content text-center">
                <div className="list-item py-4 my-2">
                    <div className="my-3" id={styles.bg}>
                        <a href="/admin" className={styles.item}>
                            <Paragraph><MdSpaceDashboard />Dashboard</Paragraph>
                        </a>
                    </div>
                    <div className="my-3">
                        <Link to="/admin/portofolio" className={styles.item}>
                            <Paragraph><AiOutlineFundProjectionScreen />Portofolio</Paragraph>
                        </Link>
                    </div>
                    <div className="my-3 ms-auto">
                        <a href="" className={styles.item}>
                            <Paragraph><MdLogout />Sign Out</Paragraph>
                        </a>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Sidebar;