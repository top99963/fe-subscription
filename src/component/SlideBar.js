import React from 'react'
import SubscriptionTab from '../component/SubscriptionTab'
import './SlideBar.css'

function SlideBar() {
    return (
        <div className="hero-slide">
            <div className="slide">
                <div className="item-slide">
                    <img alt="" className="d-none d-none d-md-block" src="dump/stock-photo-sun-rays-over-a-photovoltaic-power-plant-188611307.jpg" />
                    <img alt="" className="d-md-none" src="dump/stock-mobile.jpg" />
                    <div className="slide-detail container">
                        <h1>
                            <img alt="" src="assets/img/expressorep-title.png" />
                        </h1>
                        <p>
                            We help corporate buyers achieve their renewables goal at ease and meaningful, <br />
                            and create additional revenue for renewables owners
                        </p>
                        <a href="/#">
                            Learn more
                        </a>
                    </div>
                </div>
                <div className="item-slide">
                    <img alt="" className="d-none d-none d-md-block" src="dump/banner-2.jpg" />
                    <img alt="" className="d-md-none" src="dump/stock-mobile.jpg" />
                    <div className="slide-detail container">
                        <h1>
                            <img alt="" src="assets/img/expressorep-title.png" />
                        </h1>
                        <p>
                            We help corporate buyers achieve their renewables goal at ease and meaningful, <br />
                            and create additional revenue for renewables owners
                        </p>
                        <a href="/#">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
            <SubscriptionTab />
            <div className="down-to-content">
                <img alt="" src="assets/img/icon-down.png" />
            </div>
        </div>
    )
}

export default SlideBar