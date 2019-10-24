import React from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import SlideBar from '../component/SlideBar'
import Card from '../component/Card'
import './Landing.css'

class Landing extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <SlideBar />

                <div className="re-network">
                    <div className="container">
                        <div className="paper">
                            <h2>
                                Renewable Energy Solutions we offer
                            </h2>
                            <p>
                                Let us know your renewable energy needs so we can help you achieve your goals <br />
                                through our solution-based products
                            </p>
                            <div className="re-list">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-10">
                                        <div className="row">
                                            <div className="col-12 col-md-4">
                                                <Card
                                                    img="dump/stock-photo-photovoltaic-modules-reflect-sunset-light-and-clouds-288145694.jpg"
                                                    title="Energy Attribute Certificates (EACs)"
                                                    detail="Power consumers can source a variety of Renewable Energy Certificates (RECs) in the geography and type of renewables they want under the internationally accepted certification standard e.g. I-REC"
                                                />
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <Card
                                                    img="dump/stock-photo--d-rendering-of-windturbines-on-the-ocean-31110454.jpg"
                                                    title="Digital Power Purchase Agreement (PPA)"
                                                    detail="Power consumers can engage in PPA with terms they want through simplified process and automatically receive corresponding RECs for easy and accurate tracking."
                                                />
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <Card
                                                    img="dump/stock-photo-ev-car-or-electric-car-at-charging-station-with-the-power-cable-supply-plugged-in-on-blurred-1320569111.jpg"
                                                    title="Green EV charging"
                                                    detail="Power consumers can further decrease emissions from their EV fleet by using 100% renewable energy for charging."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="why-join">
                    <div className="top-why container">
                        <h2>
                            Why join <span>Re</span>Acc
                        </h2>
                        <img alt="" className="d-none d-none d-md-inline" src="assets/img/join-text.png" />
                        <img alt="" className="d-md-none" src="assets/img/join-text-m.jpg" />
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Landing 