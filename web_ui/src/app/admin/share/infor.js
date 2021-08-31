import React, { useEffect, useState } from 'react';
import storage from "../../uitls/storage";
import Modal from 'react-bootstrap/Modal';
import avatar from "../assets/images/no-user-icon.png";
import { formatDateToStr } from "../constants/common";
export default function InforModal(props) {

    const account = storage.getAccount();

    const getAddress = () => {
        return account ? `${account.city || ''}
        ${account.district ? '- ' + account.district : ''}
        ${account.ward ? '- ' + account.ward : ''}
        ${account.address ? '- ' + account.address : ''}` : '';
    }
    return (
        <>
            <Modal show={true} onHide={() => props.close()}>
                <Modal.Header>
                    <h5>Thông tin tài khoản</h5>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-12 mb-2 " style={{ textAlign: 'center' }}>
                            <img src={avatar} alt="usmall2" style={{ height: '10rem' }} />
                        </div>
                        <div className="col-lg-12 mb-2 row">
                            <div className="col-lg-4">
                                <label>Mã tài khoản: </label>
                            </div>
                            <div className="col-lg-8">
                                <label className="lb_w_5">{account.code}</label>
                            </div>
                        </div>
                        <div className="col-lg-12 mb-2 row">
                            <div className="col-lg-4">
                                <label>Địa chỉ E-mail: </label>
                            </div>
                            <div className="col-lg-8">
                                <label className="lb_w_5">{account.email}</label>
                            </div>
                        </div>
                        <div className="col-lg-12 mb-2 row">
                            <div className="col-lg-4">
                                <label>Họ và tên: </label>
                            </div>
                            <div className="col-lg-8">
                                <label className="lb_w_5">{account.name}</label>
                            </div>
                        </div>
                        <div className="col-lg-12 mb-2 row">
                            <div className="col-lg-4">
                                <label>Số điện thoại: </label>
                            </div>
                            <div className="col-lg-8">
                                <label className="lb_w_5">{account.phone_number}</label>
                            </div>
                        </div>
                        <div className="col-lg-12 mb-2 row">
                            <div className="col-lg-4">
                                <label>Địa chỉ: </label>
                            </div>
                            <div className="col-lg-8">
                                <label className="lb_w_5">{getAddress()}</label>
                            </div>
                        </div>
                        <div className="col-lg-12 mb-2 row">
                            <div className="col-lg-4">
                                <label>Ngày lập: </label>
                            </div>
                            <div className="col-lg-8">
                                <label className="lb_w_5">{formatDateToStr(account.created_at)}</label>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={() => props.close()}>Đóng</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}