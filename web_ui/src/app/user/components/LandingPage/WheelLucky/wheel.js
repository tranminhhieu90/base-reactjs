import React from "react";
import "./wheel.scss";
import * as apiReward from "../../../services/reward";
import * as apiCode from "../../../services/code";
import { toast } from "react-toastify";
import swal2 from "sweetalert2";
class WheelLucky extends React.Component {
  state = {
    list: [],
    radius: 78, // PIXELS
    rotate: 0, // DEGREES
    easeOut: 0, // SECONDS
    angle: 0, // RADIANS
    top: null, // INDEX
    offset: null, // RADIANS
    net: null, // RADIANS
    result: null, // INDEX
    spinning: false,
  };
  componentWillMount() {
    this.getReward();
  }
  getReward() {
    apiReward
      .list()
      .then((res) => {
        if (res.data.status === 200) {
          this.setState({ list: res.data.result });
          this.renderWheel();
        }
      })
      .catch((error) => {});
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.paramSpin && this.props.paramSpin !== nextProps.paramSpin) {
      this.reset();
      setTimeout(() => {
        this.spin();
      }, 300);
    }
  }
  renderWheel() {
    // determine number/size of sectors that need to created
    let numOptions = this.state.list.length;
    let arcSize = (2 * Math.PI) / numOptions;

    this.setState({
      angle: arcSize,
    });

    // get index of starting position of selector
    this.topPosition(numOptions, arcSize);

    // dynamically generate sectors from state list
    let angle = 0;
    for (let i = 0; i < numOptions; i++) {
      let text = this.state.list[i].name;
      let color = i % 2 ? "#494d50" : "whitesmoke";
      let textColor = i % 2 ? "whitesmoke" : "#494d50";
      this.renderSector(i + 1, text, angle, arcSize, color, textColor);
      angle += arcSize;
    }
  }

  topPosition = (num, angle) => {
    // set starting index and angle offset based on list length
    const cons = Math.PI / 2;
    const topSpot = num - Math.floor(cons / angle);
    const degreesOff = cons % angle;
    this.setState({
      top: topSpot - 1,
      offset: degreesOff,
    });
  };
  getRandomPosition = (arrData) => {
    // let po = Math.floor(Math.random() * 10);
    // if (arrData[po].quantity === 0) {
    //     return this.getRandomPosition(arrData);
    // }
    // return arrData[po].value;

    const arrTemps = arrData.reduce((res, item, index) => {
      res = [...res, ...Array(item.quantity).fill(index)];
      return res;
    }, []);
    let po = Math.floor(Math.random() * arrTemps.length);
    // console.log(arrData[arrTemps[po]].name);
    return arrData[arrTemps[po]].angle;
  };

  renderSector(index, text, start, arc, color, textColor) {
    // create canvas arc for each list element
    let canvas = document.getElementById("wheel");
    let ctx = canvas.getContext("2d");
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let radius = this.state.radius;
    let startAngle = start;
    let endAngle = start + arc;
    let angle = index * arc;
    let baseSize = radius * 3.2;
    let textRadius = baseSize - 150;

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, false);
    ctx.lineWidth = radius * 2;
    ctx.strokeStyle = color;

    ctx.font = "600 14px Verdana";
    // ctx.font = "600 15px UTMAvo";
    ctx.fillStyle = `${textColor}`;
    // ctx.fillStyle = `white`;
    ctx.stroke();

    ctx.save();
    ctx.translate(
      baseSize + Math.cos(angle - arc / 2) * textRadius,
      baseSize + Math.sin(angle - arc / 2) * textRadius
    );
    ctx.rotate(angle - arc / 2 + Math.PI / 2 + 80);
    // ctx.fillText(text, -ctx.measureText(text).width / 2.1, -0.8, 105, 40);
    ctx.fillText(text, -ctx.measureText(text).width / 2.25, 1.2, 100, 40);
    ctx.restore();
  }

  spin = () => {
    // set random spin degree and ease out time
    // set state variables to initiate animation
    // let randomSpin = Math.floor(Math.random() * 1000) + 500;
    // console.log("randomSpin", randomSpin);
    let testData = [
      {
        position: 1,
        value: 2410,
        quantity: 0,
      },
      {
        position: 2,
        value: 2370,
        quantity: 0,
      },
      {
        position: 3,
        value: 2330,
        quantity: 0,
      },
      {
        position: 4,
        value: 2300,
        quantity: 0,
      },
      {
        position: 5,
        value: 2260,
        quantity: 0,
      },
      {
        position: 6,
        value: 2220,
        quantity: 3,
      },
      {
        position: 7,
        value: 2200,
        quantity: 2,
      },
      {
        position: 8,
        value: 2520,
        quantity: 0,
      },
      {
        position: 9,
        value: 2480,
        quantity: 0,
      },
      {
        position: 10,
        value: 2450,
        quantity: 0,
      },
    ];
    // testData = testData.map((e, i) => {
    //     e.quantity = this.state.list[i].quantity
    //     return e;
    // })
    // let randomSpin = this.getRandomPosition(testData);

    // úng các goc từ 1 -> 10
    const angleValue = [
      2410, 2370, 2330, 2300, 2260, 2220, 2200, 2520, 2480, 2450,
    ];
    let { list } = this.state;
    list = list.map((e, i) => {
      e.angle = angleValue[i];
      return e;
    });
    let randomSpin = this.getRandomPosition(list);

    this.setState({
      rotate: randomSpin,
      easeOut: 2,
      spinning: true,
    });

    // calcalute result after wheel stops spinning
    setTimeout(() => {
      this.getResult(randomSpin);
    }, 2000);
  };

  getResult = (spin) => {
    // find net rotation and add to offset angle
    // repeat substraction of inner angle amount from total distance traversed
    // use count as an index to find value of result from state list
    const { angle, top, offset, list } = this.state;
    let netRotation = ((spin % 360) * Math.PI) / 180; // RADIANS
    console.log("netRotation", netRotation);

    let travel = netRotation + offset;
    let count = top + 1;
    while (travel > 0) {
      travel = travel - angle;
      count--;
    }
    let result;
    if (count >= 0) {
      result = count;
    } else {
      result = list.length + count;
    }
    // set state variable to display result
    this.saveReward(result);
    this.setState({
      net: netRotation,
      result: result,
    });
  };
  saveReward = (rewardIndex) => {
    const reward = this.state.list[rewardIndex];
    const obj = {
      reward_id: reward._id,
      reward_name: reward.name,
      ...this.props.paramSpin,
    };
    apiCode
      .spin(obj)
      .then((res) => {
        if (res.data.status === 200) {
          this.getReward();
          swal2.fire({
            icon: "success",
            title: "Chúc mừng bạn đã nhận được phần quà là " + reward.name,
            text: "Nerman sẽ liên hệ với bạn để xác nhận thông tin sớm nhất!",
          });
        } else
          swal2.fire({
            icon: "warning",
            title: res.data.message,
          });
      })
      .catch((error) => {
        swal2.fire({
          icon: "warning",
          title: "Quay thưởng thất bại",
        });
      });
  };
  reset = () => {
    // reset wheel and result
    this.setState({
      rotate: 0,
      easeOut: 0,
      result: null,
      spinning: false,
    });
  };

  render() {
    return (
      <div className="spin-wheel">
        <div className="first-circle">
          <span id="selector">&#9660;</span>
          <div className="second-circle">
            <canvas
              id="wheel"
              width="500"
              height="500"
              style={{
                WebkitTransform: `rotate(${this.state.rotate}deg)`,
                WebkitTransition: `-webkit-transform ${this.state.easeOut}s ease-out`,
              }}
            />

            <div className="spin-wheel-center">
              <div className="spin-wheel-center-2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WheelLucky;
