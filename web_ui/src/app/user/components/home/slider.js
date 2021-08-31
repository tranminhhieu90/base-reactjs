import React, { useState } from 'react';
import img1 from '../../assets/images/slide1.gif';
import img2 from '../../assets/images/slide2.gif';
import img3 from '../../assets/images/slide3.gif';
export default function HomeSlider() {

    return (
        <>
            <section className="slider">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={img1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={img2} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={img3} alt="First slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
        </>

    );
}

