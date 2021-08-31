import React, { useState } from 'react';
import logo from "../assets/images/logo.png";
export default function Footer() {
    return (
        <>
            {/* Begin Footer*/}
            <footer>
                <div className="al-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5">
                                <a className="al-logo-footer" href="/">
                                    <img src={logo} className="w-75" alt="usmall29" />
                                </a>
                                <ul>
                                    <li> <a >sdsdsds</a> </li>
                                    <li> <a >sdsdsds</a> </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 footer-help">
                                <h3 className="f-title">HỖ TRỢ</h3>
                                <ul>
                                    <li> <a >sdsdsds</a> </li>
                                    <li> <a >sdsdsds</a> </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <h3 className="f-title">LIÊN HỆ</h3>
                                <ul>
                                    <li> <a >sdsdsds</a> </li>
                                    <li> <a >sdsdsds</a> </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="al-footer-after">
                    <div className="container text-center mt-2">
                        <h6>sdsdsdsds</h6>
                        <p>MSDN: 5300795067. Địa chỉ: Ssdasdsdsdsi.
                            Số điện thoại: 0383.918sdsds.618. Email: contasdsdsdsdct@.vn</p>
                    </div>
                </div> */}
            </footer>
            {/* End Footer */}
        </>

    );
}

