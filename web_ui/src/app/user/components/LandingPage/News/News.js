import React from "react";
import "./News.scss";
import Img1 from "app/user/assets/images/news-img-1.png";
import Img2 from "app/user/assets/images/news-img-2.png";
import Img3 from "app/user/assets/images/news-img-3.png";
function News(props) {
  return (
    <div className="news">
      <div className="news-title">
        <div>News</div>
      </div>
      <div className="news-description">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </div>
      <div className="news-list">
        <div className="row gx-3">
          <div className="col-md-4 ">
            <div className="news-item">
              <img src={Img1} alt="" />
              <h3>It is a long established fact that a reader will</h3>{" "}
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form{" "}
                <span>read more</span>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="news-item">
              <img src={Img2} alt="" />
              <h3>It is a long established fact that a reader will</h3>{" "}
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form{" "}
                <span>read more</span>
              </p>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="news-item">
              <img src={Img3} alt="" />
              <h3>It is a long established fact that a reader will</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form{" "}
                <span>read more</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="news-more">More Blog</div>
    </div>
  );
}

export default News;
