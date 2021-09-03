import React from "react";
import "./wheel.scss";

export default class Wheel extends React.Component {
    state = {
        // list: [
        //     'Thẻ điẻn thoại 50k',
        //     'Thẻ điẻn thoại 100k',
        //     'Gói tinder gold 1 tháng',
        //     'Bình nước',
        //     'Iphone',
        //     'Airpod',
        //     'Gói tinder plus 1 tuần',
        //     'Combo 39k',
        //     'Sữa rửa mặt',
        //     'BBcream cho nam',
        // ],
        list: [
            'Thẻ điẻn thoại 50k',
            'Thẻ điẻn thoại 100k',
            'Gói tinder gold 1 tháng',
            'Bình nước',
            'Iphone',
            'Airpod',
            'Gói tinder plus 1 tuần',
            'Combo 39k',
            'Sữa rửa mặt',
            'BBcream cho nam',
        ],
        radius: 90, // PIXELS
        rotate: 0, // DEGREES
        easeOut: 0, // SECONDS
        angle: 0, // RADIANS
        top: null, // INDEX
        offset: null, // RADIANS
        net: null, // RADIANS
        result: null, // INDEX
        spinning: false
    };

    componentDidMount() {
        // generate canvas wheel on load
        this.renderWheel();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isSpinning)
            this.spin();
    }
    renderWheel() {
        // determine number/angle of sectors that need to created
        let numOptions = this.state.list.length;
        let angle = (2 * Math.PI) / numOptions;
        this.setState({ angle });
        // get index of starting position of selector
        this.topPosition(numOptions, angle);

        // dynamically generate sectors from state list
        let angleStart = 0;
        for (let i = 0; i < numOptions; i++) {
            let text = this.state.list[i];
            this.renderSector(i + 1, text, angleStart, angle, this.getColor());
            angleStart += angle;
        }
    }

    topPosition = (num, angle) => {
        // set starting index and angle offset based on list length
        const cons = Math.PI / 2;
        const topSpot = num - Math.floor(cons / angle);
        const degreesOff = cons % angle;
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
        let baseSize = radius * 3.33;
        let textRadius = baseSize - 150;

        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle, false);
        ctx.lineWidth = radius * 2;
        ctx.strokeStyle = color;

        // set text
        ctx.font = "13px Arial";
        ctx.fillStyle = "black";
        ctx.stroke();
        ctx.save();
        ctx.translate(
            baseSize + Math.cos(angle - arc / 2) * textRadius,
            baseSize + Math.sin(angle - arc / 2) * textRadius
        );
        ctx.rotate(angle - arc / 2 + Math.PI / 2);
        ctx.fillText(text, -ctx.measureText(text).width / 2, 0);

        // ctx.rotate(angle * Math.PI / 4);
        ctx.fillText(text, 0, 0);
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
        // set random spin degree and ease out time
        // set state variables to initiate animation
        let randomSpin = Math.floor(Math.random() * 900) + 500 //example 360 is a round, 180 is half round;
        this.setState({
            rotate: randomSpin,
            easeOut: 2,
            spinning: true
        });

        // calcalute result after wheel stops spinning
        setTimeout(() => {
            this.getResult(randomSpin);
        }, 2000); // 2000 same easeout is 2s
    };

    getResult = spin => {
        // find net rotation and add to offset angle
        // repeat substraction of inner angle amount from total distance traversed
        // use count as an index to find value of result from state list
        const { angle, top, offset, list } = this.state;
        let netRotation = ((spin % 360) * Math.PI) / 180; // RADIANS
        let travel = netRotation + offset;
        let count = top + 1;
        while (travel > 0) {
            travel = travel - angle;
            count--;
        }
        let result = count >= 0 ? count : list.length + count;
        // set state variable to display result
        this.setState({
            net: netRotation,
            result: result
        });
    };

    reset = () => {
        // reset wheel and result
        this.setState({
            rotate: 0,
            easeOut: 0,
            result: null,
            spinning: false
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
                {this.state.spinning ? (
                    <button type="button" id="reset" onClick={this.reset}>
                        reset
                    </button>
                ) : (
                    <button type="button" id="spin" onClick={this.spin}>
                        spin
                    </button>
                )}
                <div class="display">
                    <span id="readout">
                        YOU WON:{"  "}
                        <span id="result">{this.state.list[this.state.result]}</span>
                    </span>
                </div>
            </div>
        );
    }
}