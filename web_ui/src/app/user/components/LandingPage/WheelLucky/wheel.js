import React from "react";
import "./wheel.scss";
import * as apiReward from "../../../services/reward";
import * as apiCode from "../../../services/code";
import { toast } from 'react-toastify';
export default class Wheel extends React.Component {
    state = {
        rewards: [],
        radius: 95, // PIXELS
        rotate: 0, // DEGREES
        easeOut: 0, // SECONDS
        angle: 0, // RADIANS
        top: null, // INDEX
        offset: null, // RADIANS
        net: null, // RADIANS
        result: null, // INDEX
    };
    componentWillMount() {
        this.getReward();
    }
    getReward() {
        apiReward.list().then(res => {
            if (res.data.status === 200) {
                this.setState({ rewards: res.data.result });
                this.renderWheel();
            }
        }).catch((error) => { });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.paramSpin && this.props.paramSpin !== nextProps.paramSpin)
            this.spin();
    }
    renderWheel() {
        // determine number/angle of sectors that need to created
        let numOptions = this.state.rewards.length;
        let angle = (2 * Math.PI) / numOptions;
        this.setState({ angle });
        // get index of starting position of selector
        this.topPosition(numOptions, angle);

        // dynamically generate sectors from state list
        let angleStart = 0;
        for (let i = 0; i < numOptions; i++) {
            let text = this.state.rewards[i].name;
            this.renderSector(i + 1, text, angleStart, angle, this.getColor());
            angleStart += angle;
        }
    }

    topPosition = (num, angle) => {
        // set starting index and angle offset based on list length
        const cons = Math.PI / 2;
        const topSpot = num - Math.floor(cons / angle); // chia lấy nguyên
        const degreesOff = cons % angle;  // chia lấy dư
        this.setState({
            top: topSpot - 1,// trù 1 ra index in mảng
            offset: degreesOff
        });
    };

    renderSector(index, text, start, arc, color) {
        // create canvas arc for each list element
        let canvas = document.getElementById("wheel");
        let ctx = canvas.getContext("2d");
        let x = canvas.width / 2;
        let y = canvas.height / 2;
        let radius = this.state.radius;
        let startAngle = start;
        let endAngle = start + arc;
        let angle = index * arc;// position angle
        let baseSize = x || radius * 2.63 // bằng x || y , 2,63 = x || y / radius;
        let textRadius = baseSize - 150;

        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.lineWidth = radius * 2;
        ctx.strokeStyle = color;
        ctx.save();

        // set text
        ctx.font = "14px Arial bold";
        ctx.fillStyle = "black";
        ctx.stroke();
        ctx.save();
        ctx.translate(
            baseSize + Math.cos(angle - arc / 2) * textRadius,
            baseSize + Math.sin(angle - arc / 2) * textRadius
        );
        ctx.rotate((arc / 2) + (index - 1) * arc);
        ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
        ctx.restore();
    }

    getColor() {
        // randomly generate rbg values for wheel sectors
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return `rgba(${r},${g},${b},0.4)`;
    }

    spin = () => {
        this.reset();
        setTimeout(() => {
            // set random spin degree and ease out time
            // set state variables to initiate animation
            let randomSpin = Math.floor(Math.random() * 900) + 500 //example 360 is a round, 180 is half round;
            this.setState({
                rotate: randomSpin,
                easeOut: 3,
            });
            // calcalute result after wheel stops spinning
            setTimeout(() => {
                this.getResult(randomSpin);
            }, 3000); // 3000 same easeout is 3s
        }, 300);

    };

    getResult = spin => {
        // find net rotation and add to offset angle
        // repeat substraction of inner angle amount from total distance traversed
        // use count as an index to find value of result from state list
        const { angle, top, offset, rewards } = this.state;
        let netRotation = ((spin % 360) * Math.PI) / 180; // RADIANS
        let travel = netRotation + offset;
        let count = top + 1;
        while (travel > 0) {
            travel = travel - angle;
            count--;
        }
        let result = count >= 0 ? count : rewards.length + count;
        // set state variable to display result
        this.saveReward(result);
        this.setState({
            net: netRotation,
            result: result
        });
    };

    saveReward = (rewardIndex) => {
        const reward = this.state.rewards[rewardIndex];
        const obj = {
            reward_id: reward._id,
            reward_name: reward.name,
            ...this.props.paramSpin
        };
        apiCode.spin(obj).then(res => {
            if (res.data.status === 200) {
                toast.success('Quay thưởng thành công');
            } else
                toast.warning(res.data.message);
        }).catch((error) => {
            toast.warning("Quay thưởng thất bại.");
        });
    }
    reset = () => {
        // reset wheel and result
        this.setState({
            rotate: 0,
            easeOut: 0,
            result: null,
        });
    };

    render() {
        return (
            <div className="text-center wheel-wrap">
                <span id="selector">&#9660;</span>
                <canvas
                    id="wheel"
                    width="500"
                    height="500"
                    style={{
                        WebkitTransform: `rotate(${this.state.rotate}deg)`, // excu spin
                        WebkitTransition: `-webkit-transform ${this.state.easeOut
                            }s ease-out`// time quay , ease-out chậm ở cuối lúc quay
                    }}
                />
            </div>
        );
    }
}
