import React from 'react';
import "./assets/css/style.scss";
import "./assets/vender/bootstrap-5.0.0/css/bootstrap.min.css";
import Header from "./share/header";
import Footer from "./share/footer";
import UserRouter from "./user.router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function User() {
    return (
        <div className="main_user">
            {/* Begin Header*/}
            <Header />
            {/* End Header*/}
            {/* Begin Main*/}
            <UserRouter />
            {/* End Main*/}
            {/* Begin Footer*/}
            <Footer />
            {/* End Footer */}
            {/* tost notify */}
            <ToastContainer />
        </div>
    );
}

