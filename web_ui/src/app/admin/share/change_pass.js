import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ChangePassword } from "../models/account";
import { MESSAGESERR } from "../constants/common";
import * as api from '../services/account';
import { toast } from 'react-toastify';
export default function ChangePassModal(props) {

    const [fields, setFields] = useState({ ...ChangePassword });
    const [errors, setErrors] = useState({ ...ChangePassword });

    const handleValidation = (field, fieldsT) => {
        let errorsT = { ...errors };
        if (field)
            errorsT[field] = '';
        validateReqire(field, fieldsT, errorsT, Object.keys({ ...ChangePassword }));

        if (field === 'new_password' && fieldsT['new_password']) {
            if (fieldsT.new_password.length < 6)
                errorsT.new_password = MESSAGESERR.passW_required;
        }
        if (!field || field === 'confirmPassword' && fieldsT['confirmPassword']) {
            if (fieldsT.confirmPassword !== fieldsT.new_password)
                errorsT.confirmPassword = MESSAGESERR.passW_confirm_wrong;
        }
        setErrors(errorsT);
        return Object.values(errorsT).every(x => !x);
    }
    const validateReqire = (field, fieldsT, errorsT, fiels = []) => {
        fiels.forEach(item => {
            if (field === item || !field) {
                if (!fieldsT[item] || (Array.isArray(fieldsT[item]) && !fieldsT[item][0]))
                    errorsT[item] = MESSAGESERR.field_required;
            }
        });
    }
    const handleChange = (e, field) => {
        let fieldsT = { ...fields };
        fieldsT[field] = e.target.value;
        handleValidation(field, fieldsT);
        setFields(fieldsT);
    }
    const changePass = async () => {
        if (handleValidation('', fields)) {

            await api.changePassword({ ...fields }).then(res => {
                if (res.data.status === 200) {
                    toast.success("Thay đổi mật khẩu thành công.");
                    props.close()
                } else
                    toast.warning(res.data.message);
            }).catch((error) => {
                toast.warning("Thay đổi mật khẩu thất bại.");
            });
        }
    };
    return (
        <>
            <Modal show={true} onHide={() => props.close()}>
                <Modal.Header>
                    <h5>Đổi mật khẩu</h5>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-12 mb-3">
                            <label htmlFor="txtPassword" className="form-label required">Mật khẩu cũ</label>
                            <input type="password" className={`form-control ${!!errors.password && 'is-invalid'}`} name="txtPassword" id="txtPassword"
                                value={fields.password || ''} onChange={(e) => handleChange(e, 'password')} />
                            <div className="invalid-feedback">{errors.password}</div>
                        </div>
                        <div className="col-lg-12 mb-3">
                            <label htmlFor="txtPasswordNew" className="form-label required">Mật khẩu mới</label>
                            <input type="password" className={`form-control ${!!errors.new_password && 'is-invalid'}`} name="txtPasswordNew" id="txtPasswordNew"
                                value={fields.new_password || ''} onChange={(e) => handleChange(e, 'new_password')} />
                            <div className="invalid-feedback">{errors.new_password}</div>
                        </div>
                        <div className="col-lg-12 mb-3">
                            <label htmlFor="txtConfirmPassword" className="form-label required">Xác nhận mật khẩu mới</label>
                            <input type="password" className={`form-control ${!!errors.confirmPassword && 'is-invalid'}`} name="txtConfirmPassword" id="txtConfirmPassword"
                                value={fields.confirmPassword || ''} onChange={(e) => handleChange(e, 'confirmPassword')} />
                            <div className="invalid-feedback">{errors.confirmPassword}</div>
                        </div>

                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-success px-2" onClick={changePass}>Đổi mật khẩu</button>
                    <button type="button" className="btn btn-secondary" onClick={() => props.close()}>Đóng</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}