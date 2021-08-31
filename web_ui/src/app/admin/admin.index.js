import React, { useState, useEffect } from 'react';
import "./assets/vender/bootstrap-5.0.0/css/bootstrap.min.css";
import "./assets/css/style.scss";
import logo from "./assets/images/logo.png";
import iconU from "./assets/images/iconU.png"
import AdminRouter from "./admin.router";
import AdminHeader from "./share/header";
import nav from "./nav";
import { useLocation, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import storage from "../uitls/storage";
export default function Admin() {
    const { pathname } = useLocation();
    const history = useHistory();

    // if (!storage.isLoggednIn() || storage.getAccount().scope_access === "CUSTOMER") {
    //     history.push('/');
    // }
    const [navs, setNavs] = useState(nav);
    // useEffect(() => {
    //     const account = storage.getAccount();
    //     if (account && account.scope_access === "WRITER") {
    //         const n = navs.filter(x => x.scope_access === 'WRITER');
    //         setNavs(n);
    //     }
    // }, []);

    return (
        <div className="main_admin">
            {/* Sidebar   */}
            <nav id="sidebar">
                <div className="sidebar-header">
                    <a href="/admin" className="al-logo">
                        <img src={logo} alt="logo" className="logo" />
                        <img src={iconU} alt="iconlogo" className="iconU" />
                    </a>
                </div>
                <ul className="list-unstyled components">
                    {
                        navs.map(e =>
                            <li key={e.url} className={`${e.url === pathname && 'active'}`} >
                                <a href={e.url}>
                                    <i className={e.icon}></i>
                                    <span>{e.name}</span>
                                </a>
                            </li>
                        )
                    }
                </ul>
            </nav>
            {/* Page Content */}
            <div id="content">
                <AdminHeader />
                <div className="main_ad_content">
                    <AdminRouter />
                </div>
            </div>
            <ToastContainer />
        </div>

    );
}
