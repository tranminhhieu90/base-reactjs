import React, { useState, useEffect, useRef } from 'react';
import Wheel from './wheel';
import './style.scss';
import ModalWheel from './modal';
export default function WheelLucky(props) {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [paramSpin, setParamSpin] = useState(null);
    const wheelRef = useRef();
    useEffect(() => {
        if (props.isOpenSpinWheel !== null) {
            setIsOpenModal(true);
        }
    }, [props.isOpenSpinWheel])

    const onSpin = (param) => {
        // if (window.innerWidth <= 480) {
        setTimeout(() => {
            wheelRef.current.scrollIntoView({ behavior: 'smooth' })
        }, 200)
        // }
        setIsOpenModal(false);
        setParamSpin(param)
    }
    return (
        <div className="container pb-5">
            <div className="row">
                <div className="col-md-6" ref={wheelRef}>
                    <Wheel paramSpin={paramSpin} />
                </div>
                <div className="col-md-6 content-right">
                    <div className="mb-4">
                        <h1>1 tỷ VND quà tặng</h1>
                    </div>
                    <p className="col-md-9 mb-4">Với mỗi sản phẩm mua từ ngày 5/9 đến ngày 5/10 khách hàng sẽ nhận 1 mã quay thưởng.
                        100% trúng thưởng với hàng ngàn phần quà trị giá hơn 1 tỷ đồng từ Nerman.</p>
                    <button type="button" className="btn btn-danger btn-lg" onClick={() => setIsOpenModal(true)}>Quay Ngay</button>
                </div>
            </div>
            {isOpenModal && <ModalWheel spin={(param) => onSpin(param)} />}
        </div>
    );

}