import Header from "app/user/share/header";
import React from "react";
import "./Slides.scss";
import img1 from '../../../assets/images/slide1.png';
import img1_2 from '../../../assets/images/slide1_2.png';
import play from '../../../assets/images/play.png';
function Slides(props) {
  return (
    <div className="slides">
      <div className="slides-header">
        <Header />
      </div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleControls" data-slide-to="1" ></li>
          <li data-target="#carouselExampleControls" data-slide-to="2" ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row item-wrap">
              <div className="col-md-5 col-5 slide-left" >
                <div className="slide-left-wrap">
                  <div>
                    {/* <h1>Win!</h1>
                    <h2>1 of 5 Bitthday Bounties</h2>
                    <h2>Poppins</h2> */}
                    <img className="d-block"
                      src={img1_2} alt={img1_2} />
                  </div>
                  <div className="play mt-5">
                    <div className="play_1 border">
                      <div className="play_2 border">
                        <div className="play_3 border">
                          <img className="d-block"
                            src={play} alt={play} />
                        </div>
                      </div>
                    </div>
                    <a className="p-2 text-body">How It Work?</a>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-7 slide-right" >
                <img className="d-block"
                  src={img1} alt={img1} />
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="row item-wrap">
              <div className="col-md-5 col-5 slide-left" >
                <div className="slide-left-wrap">
                  <div>
                    {/* <h1>Win!</h1>
                    <h2>1 of 5 Bitthday Bounties</h2>
                    <h2>Poppins</h2> */}
                    <img className="d-block"
                      src={img1_2} alt={img1_2} />
                  </div>
                  <div className="play mt-5">
                    <div className="play_1 border">
                      <div className="play_2 border">
                        <div className="play_3 border">
                          <img className="d-block"
                            src={play} alt={play} />
                        </div>
                      </div>
                    </div>
                    <a className="p-2 text-body">How It Work?</a>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-7 slide-right" >
                <img className="d-block"
                  src={img1} alt={img1} />
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="row item-wrap">
              <div className="col-md-5 col-5 slide-left" >
                <div className="slide-left-wrap">
                  <div>
                    {/* <h1>Win!</h1>
                    <h2>1 of 5 Bitthday Bounties</h2>
                    <h2>Poppins</h2> */}
                    <img className="d-block"
                      src={img1_2} alt={img1_2} />
                  </div>
                  <div className="play mt-5">
                    <div className="play_1 border">
                      <div className="play_2 border">
                        <div className="play_3 border">
                          <img className="d-block"
                            src={play} alt={play} />
                        </div>
                      </div>
                    </div>
                    <a className="p-2 text-body">How It Work?</a>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-7 slide-right" >
                <img className="d-block"
                  src={img1} alt={img1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Slides;
