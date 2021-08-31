import React, { useEffect, useState } from 'react';
import avatar from "../assets/images/no-user-icon.png";
import nav from "../nav";
import { useLocation } from 'react-router-dom';
import storage from "../../uitls/storage";
import { useHistory } from 'react-router-dom';
import InforModal from "./infor";
import ChangePassModal from "./change_pass";
export default function AdminHeader() {

    const { pathname } = useLocation();
    const history = useHistory();
    const [isShowInfor, setIsShowInfor] = useState(false);
    const [isShowChangePass, setIsShowChangePass] = useState(false);
    useEffect(() => { getTitle(); })
    const getTitle = () => {
        return nav.find(x => x.url === pathname).name;
    }
    const logout = () => {
        storage.logout();
        history.push('/');
    }
    const showInfo = () => {
        setIsShowInfor(true);
    }
    const showChangePass = () => {
        setIsShowChangePass(true);
    }
    return (
        < nav className="row navbar navbar-expand-md navbar-light bg-light"  >
            <div className="container">
                <button type="button" id="sidebarCollapse" className="btn btn-info">
                    <i className="fas fa-align-left"></i>
                </button>
                <div className="col-5 m-1">
                    <h4>{getTitle()}</h4>
                </div>
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-0">
                        <li className="nav-item dropdown icon_infor">
                            <a href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={avatar} alt="usmall1" style={{ height: '40px' }} />
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ left: '-97px' }}>
                                <li><a className="dropdown-item" onClick={showInfo}><i className="fa fa-info-circle"></i>&nbsp;Thông tin tài khoản</a></li>
                                <li><a className="dropdown-item" onClick={showChangePass}><i className="fa fa-exchange-alt"></i>&nbsp; Đổi mật khẩu</a></li>
                                <li><a className="dropdown-item" href="/"><i className="fa fa-user"></i>&nbsp;Về trang người dùng</a></li>
                                <li><a className="dropdown-item" onClick={logout} ><i className="fa fa-sign-out-alt"></i>&nbsp;Đăng xuất</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
                {isShowInfor && <InforModal close={() => setIsShowInfor(false)} />}
                {isShowChangePass && <ChangePassModal close={() => setIsShowChangePass(false)} />}
            </div>
        </nav >

    );
}
