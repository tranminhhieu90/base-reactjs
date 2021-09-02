import React, { useEffect, useRef } from "react";
import "./style.scss";
import { gsap, Power1, Power4, TweenMax } from "gsap";
import WheelComponent from 'react-wheel-of-prizes'
import 'react-wheel-of-prizes/dist/index.css'
function WheelLucky(props) {

    const boxRef = useRef();
    useEffect(() => {
        gsap.to(boxRef.current, { rotation: "+=360" });
    })
    const segments = [
        'Gói tinder gold 1 tháng',
        'won 70',
        'won 10',
        'better luck next time',
        'won 2',
        'won uber pass',
        'better luck next time',
        'won a voucher'
    ]
    const segColors = [
        '#EE4040',
        '#F0CF50',
        '#815CD1',
        '#3DA5E0',
        '#34A24F',
        '#F9AA1F',
        '#EC3F3F',
        '#FF9000'
    ]
    const onFinished = (winner) => {
        console.log(winner)
    }
    useEffect(() => {
        //  Setup variables
        var wheel = document.getElementsByClassName('wheel'),
            active = document.getElementsByClassName('active'),
            currentRotation,
            lastRotation = 0,
            tolerance,
            deg;

        //  Random degree
        const getRandomInt = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        var deg = getRandomInt(360, 1080);

        //  Creating the Timeline
        var indicator = gsap.timeline();
        var spinWheel = gsap.timeline();
        indicator.duration(active, .13, { rotation: -10, transformOrigin: "65% 36%", ease: Power1.easeOut })
            .duration(active, .13, { rotation: 3, ease: Power4.easeOut })
            .add("end");

        //  Luckywheel animation
        spinWheel.duration(wheel, 5, {
            rotation: deg, transformOrigin: "50% 50%", ease: Power4.easeOut, onUpdate: (
                () => {
                    // currentRotation = Math.round(wheel._gsTransform.rotation);    //_gsTransform: current position of the wheel
                    // tolerance = currentRotation - lastRotation;
                    // debugger
                    // console.log("lastRot: " + lastRotation);
                    // console.log("currentRot: " + currentRotation);
                    // console.log("tol: " + tolerance);
                    // console.log(indicator.progress());
                    // console.log("spinwheelprogress: " + spinWheel.progress());

                    // if (Math.round(currentRotation) % (360 / 12) <= tolerance) {
                    //     if (indicator.progress() > .2 || indicator.progress() === 0) {
                    //         indicator.play(0);
                    //     }
                    // }
                    // lastRotation = currentRotation;
                }
            )
        });
        spinWheel.add("end");
        //   Buttons


    })
    const play = () => {
        // indicator.timeScale(1).seek(0);
        // spinWheel.timeScale(1).seek(0);
    }


    return (
        <div >
            <WheelComponent
                segments={segments}
                segColors={segColors}
                onFinished={(winner) => onFinished(winner)}
                winningSegment
                primaryColor='#2f3640cc'
                contrastColor='white'
                isOnlyOnce={false}
                size={290}
                upDuration={100}
                downDuration={1000}
                fontFamily='Arial'
            />

            <div className="container">
                <div className="row">
                    <div className="luckywheel" >
                        <div >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 730 730">
                                <g className="wheel" >
                                    <circle className="frame" cx="365" cy="365" r="357" />
                                    <circle cx="365" cy="365" r="335" fill="#E6C758" />
                                    <g className="sectors">
                                        <g>
                                            <path id="_1" d="M365,365V35.9A328.1,328.1,0,0,0,200.5,80Z" transform="translate(0)" />
                                            {/* <text x="400" y="200.5" transform="translate(-80)">11</text> */}
                                        </g>
                                        <g>
                                            <path id="_2" d="M365,365,529.5,80A328.1,328.1,0,0,0,365,35.9Z" transform="translate(0)" />
                                            {/* <text x="500" y="200.5" transform="translate(-80)">22</text> */}
                                        </g>
                                        <g>
                                            <path id="_3" d="M365,365,650,200.5A328.5,328.5,0,0,0,529.5,80Z" transform="translate(0)" />
                                            {/* <text x="600" y="200.5" transform="translate(-80)">33</text> */}
                                        </g>
                                        <g>
                                            <path id="_4" d="M365,365H694.1A328.1,328.1,0,0,0,650,200.5Z" transform="translate(0)" />
                                            {/* <text x="700" y="200.5" transform="translate(-80)">44</text> */}
                                        </g>
                                        <g>
                                            <path id="_5" d="M365,365,650,529.5A328.1,328.1,0,0,0,694.1,365Z" transform="translate(0)" />
                                            {/* <text x="800" y="100.5" transform="translate(-80)">55</text> */}
                                        </g>

                                        <path id="_6" d="M365,365,529.5,650A328.5,328.5,0,0,0,650,529.5Z" transform="translate(0)" />
                                        <path id="_7" d="M365,365V694.1A328.1,328.1,0,0,0,529.5,650Z" transform="translate(0)" />
                                        <path id="_8" d="M365,365,200.5,650A328.1,328.1,0,0,0,365,694.1Z" transform="translate(0)" />
                                        <path id="_9" d="M365,365,80,529.5A328.5,328.5,0,0,0,200.5,650Z" transform="translate(0)" />
                                        <path id="_10" d="M365,365H35.9A328.1,328.1,0,0,0,80,529.5Z" transform="translate(0)" />
                                        <path id="_11" d="M365,365,80,200.5A328.1,328.1,0,0,0,35.9,365Z" transform="translate(0)" />
                                        <path id="_12" d="M365,365,200.5,80A328.5,328.5,0,0,0,80,200.5Z" transform="translate(0)" />

                                    </g>
                                    <g className="middle">
                                        <g className="wheelMiddle">
                                            <circle cx="365" cy="365" r="39" fill="#ffffff9c" />
                                        </g>
                                        <circle id="middle-3" cx="365" cy="365" r="22" fill="#0E5DF8" />
                                    </g>
                                </g>
                                <g className="active">
                                    <g>
                                        <path d="M707,160.5c-11.4-17.9-35.8-22.8-54.5-11a41.7,41.7,0,0,0-13.6,14.1l-33.6,58.9a2.3,2.3,0,0,0,0,2.4,2.4,2.4,0,0,0,2.3,1.1l67.5-5.1a43.8,43.8,0,0,0,18.6-6.3C712.4,202.7,718.3,178.5,707,160.5Z" transform="translate(0)" fillOpacity="0.22" />
                                        <path className="winIndicator" d="M711.9,157.4a38.4,38.4,0,0,0-66,1.8l-31.5,57.5a2.1,2.1,0,0,0,0,2.4,2.6,2.6,0,0,0,2.2,1.2l65.6-3.9a39.6,39.6,0,0,0,17.9-5.9A38.5,38.5,0,0,0,711.9,157.4Z" transform="translate(0)" />
                                        <path d="M681.7,166.9a9.3,9.3,0,0,0-6.6,4.8l-.8,2.1a14.9,14.9,0,0,0-.2,2.1,8.8,8.8,0,0,0,1.1,4.2,9.2,9.2,0,0,0,2.9,3,7.6,7.6,0,0,0,2.9,1.3l1.1.2a8.6,8.6,0,0,0,4.2-.6,8.4,8.4,0,0,0,3.4-2.5,7.4,7.4,0,0,0,2-3.8,8.5,8.5,0,0,0-.1-4.2,8.4,8.4,0,0,0-2.1-3.8,7.4,7.4,0,0,0-3.5-2.3l-1-.3A12.2,12.2,0,0,0,681.7,166.9Z" transform="translate(0)" fill="#ccc" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WheelLucky;
