import React, { useState } from 'react';
import Wheel from './wheel';
import './style.scss';
import ModalWheel from './modal';
export default function WheelLucky() {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isSpinning, setIsSpinning] = useState(false);
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <Wheel isSpinning={isSpinning} />
                </div>
                <div className="col-md-6 content-right">
                    <div className="mb-4">
                        <h1>Spin Here Now.</h1>
                    </div>
                    <p className="col-md-9 mb-4">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                        a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure.</p>
                    <button type="button" className="btn btn-danger btn-lg" onClick={() => setIsOpenModal(true)}>Spin Now</button>
                </div>
            </div>
            {isOpenModal && <ModalWheel close={() => { setIsOpenModal(false) }} save={() => setIsSpinning(true)} />}
        </div>
    );

}