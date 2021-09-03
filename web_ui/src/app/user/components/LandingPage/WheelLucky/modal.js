import React, { useEffect, useState } from 'react';
import * as apiCode from "../../../services/code";
import { MESSAGESERR } from "../../../constants/common";
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';

export default function ModalWheel(props) {

    const Model = {
        name: '',
        phone_number: '',
        code: ''
    }
    const [fields, setFields] = useState({ ...Model });
    const [errors, setErrors] = useState({ ...Model });

    const handleValidation = (field, fieldsT) => {
        let errorsT = { ...errors };
        if (field)
            errorsT[field] = '';
        validateReqire(field, fieldsT, errorsT, Object.keys({ ...Model }));
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
    const keyPressPhone = (e) => {
        if (e.charCode < 48 || e.charCode > 57)
            e.preventDefault();
    }
    const confirm = async () => {
        if (handleValidation('', fields)) {
            await apiCode.checkOnGoingCode(fields.code).then(res => {
                if (res.data.result) {
                    props.spin(fields);
                } else
                    toast.warning(res.data.message);
            }).catch((error) => {
                toast.warning("Quay thưởng thất bại.");
            });
        }
    };
    return (
        <>
            <Modal show={true} size="lg" onHide={() => props.spin(null)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nhập thông tin quay thưởng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <div className="form-group mb-4">
                                <label >Họ và tên</label>
                                <input type="text" className={`form-control form-control-lg ${!!errors.name && 'is-invalid'}`} name="name" id="name"
                                    value={fields.name || ''} onChange={(e) => handleChange(e, 'name')} />
                                <div className="invalid-feedback">{errors.name}</div>
                            </div>
                            <div className="form-group mb-4">
                                <label >Số điện thoại</label>
                                <input type="text" className={`form-control form-control-lg ${!!errors.phone_number && 'is-invalid'}`} name="phone_number" id="phone_number"
                                    value={fields.phone_number || ''} onChange={(e) => handleChange(e, 'phone_number')} onKeyPress={keyPressPhone} />
                                <div className="invalid-feedback">{errors.phone_number}</div>
                            </div>
                            <div className="form-group mb-4">
                                <label >Mã quay thưởng</label>
                                <input type="text" className={`form-control form-control-lg ${!!errors.code && 'is-invalid'}`} name="code" id="code"
                                    value={fields.code || ''} onChange={(e) => handleChange(e, 'code')} />
                                <div className="invalid-feedback">{errors.code}</div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-primary btn-warning btn-lg" onClick={confirm}>Xác nhận</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}