import React from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import SlideBar from '../component/SlideBar'
import Card from '../component/Card'
import Card2 from '../component/Card2'
import './Landing.css'

import { animateScroll as scroll } from 'react-scroll'


class Landing extends React.Component {

    updateScroll() {
        const id = window.location.hash.substr(1);
        if (id === 'news') {
            scroll.scrollTo(2690)
        } else if (id === 'about') {
            scroll.scrollTo(742)
        } else if (id === 'partners') {
            scroll.scrollTo(3400)
        }
    }

    componentDidMount() {
        this.updateScroll()

    }

    componentDidUpdate() {
        this.updateScroll()
    }

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

                <div className="offer">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <img alt="" src="assets/img/offer-notebook.png" />
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="offer-detail">
                                    <ul>
                                        <li>
                                            <div className="img-offer">
                                                <img alt="" src="assets/img/offer-2-n.png" />
                                            </div>
                                            <div className="list-offer">
                                                <p style={{ fontWeight: "bold" }}>One-stop shop</p>
                                                <p>
                                                    End-to-end simple process from registration, sourcing, tracking and reporting your progress on renewable energy to relevant stakeholders
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-offer">
                                                <img alt="" src="assets/img/offer-1-n.png" />
                                            </div>
                                            <div className="list-offer">
                                                <p style={{ fontWeight: "bold" }}>Compliance with standard</p>
                                                <p>
                                                    Fully compliance with the internationally accepted certification standard e.g. I-REC
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-offer">
                                                <img alt="" src="assets/img/offer-3-n.png" />
                                            </div>
                                            <div className="list-offer">
                                                <p style={{ fontWeight: "bold" }}>More solutions to mix/match</p>
                                                <p>
                                                    More renewable energy solutions with impact details for you to mix/match for an optimal achievement of your renewable energy target
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-offer">
                                                <img alt="" src="assets/img/offer-4-n.png" />
                                            </div>
                                            <div className="list-offer">
                                                <p style={{ fontWeight: "bold" }}>Powerful tracking tools</p>
                                                <p>
                                                    Fully automated state-of-the-art blockchain solutions for saving your time and resources
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-offer">
                                                <img alt="" src="assets/img/offer-5-n.png" />
                                            </div>
                                            <div className="list-offer">
                                                <p style={{ fontWeight: "bold" }}>
                                                    No double counting
                                                </p>
                                                <p>Working closely with local and international registries and standards, our technology helps avoid double counting of renewable energy assets.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="news">
                    <div className="container">
                        <h2>
                            News <span><img alt="" src="assets/img/ico-slash.png" /></span> Events
                        </h2>
                        <div className="news-list">
                            <div className="row row justify-content-center">
                                <div className="col-12 col-xl-10">
                                    <ul>
                                        <Card2
                                            img='dump/news-im.jpg'
                                            title='Thailand’s national utility launches Ethereum-based renewable energy platform'
                                            detail='Thailand’s state-owned energy company, PTT, has partnered with the nonprofit Energy Web Foundation to create a new blockchain-based renewable energy system.'
                                            detail2='Their goal is to develop a regional energy solution that’s compliant with the International Renewable Energy Certificates Standard (I-REC), which provides certificates to companies verifying that their green energy is legitimate and derived from a reliable and sustainable source.'
                                            date='15 September 2019'
                                            link='https://finance.yahoo.com/news/thailand-national-utility-launches-ethereum-145600093.html'
                                        />
                                        <Card2
                                            img='dump/news-im-2.jpg'
                                            title='PTT and Energy Web Foundation Launch Blockchain-based Renewables Platform for Thailand, ASEAN, Japan'
                                            detail='New tool will support corporate renewable purchases in the region, with fully commercial application expected by May 2020'
                                            detail2='Bangkok, Thailand, and Zug, Switzerland — September 11, 2019 — Today, Thailand-based multinational energy conglomerate PTT and global energy blockchain nonprofit Energy Web Foundation (EWF) jointly announced the development of a new blockchain-based renewables platform.'
                                            date='11 September 2019'
                                            link='https://www.energyweb.org/2019/09/11/ptt-and-energy-web-foundation-launch-blockchain-based-renewables-platform-for-thailand-asean-japan/'
                                        />
                                        <Card2
                                            img='dump/stock-photo-photovoltaic-panels-for-renewable-electric-production-navarra-aragon-spain-500035789.jpg'
                                            title='PTT to launch blockchain renewable energy marketplace'
                                            detail='Today state-owned Thai energy conglomerate PTT announced plans to develop a blockchain-based renewables marketplace in collaboration with Energy Web Foundation (EWF)'
                                            detail2='An energy blockchain nonprofit. The launch of the full PTT Renewables Marketplace Platform is set for May 2020.'
                                            date='09 August 2019'
                                            link='https://www.ledgerinsights.com/ptt-blockchain-renewable-energy-marketplace-rec-ewf/'
                                        />
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="btn">
                            <a href="/#">
                                More news
                            </a>
                        </div>
                    </div>
                </div>

                <div className="founding-member">
                    <div className="container">
                        <h2>
                            Partners
                        </h2>
                        <ul className="mem-1">
                            <li>
                                <img alt="" className="d-none d-none d-md-inline" src="assets/img/founder-member.png" />
                                <img alt="" className="d-md-none" src="assets/img/founder-member-m.png" />
                            </li>
                        </ul>
                        <div>
                            <h4>
                                Do you want to become a <strong>Renewables Accel</strong> member?
                            </h4>
                            <a className="btn" href='/#'>
                                Subscribe Now
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Landing 