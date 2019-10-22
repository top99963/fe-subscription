import React from 'react';
import SubscriptionTab from './SubscriptionTab'
import {animateScroll as scroll } from 'react-scroll'

const initState = {}

class Main extends React.Component {
  constructor() {
    super()
    this.state = { ...initState }
  }
  componentDidMount() {
    const id = window.location.hash.substr(1);
    if (id === 'news') {
      scroll.scrollTo(2690)
    } else if (id ==='about') {
      scroll.scrollTo(742)
    } else if (id ==='partners') {
      scroll.scrollTo(5000)
    }
  }
  render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css" />
        <header>
          <div className="container">
            <div className="row">
              <div className="col-7 col-md-2">
                <a href='/' className="logo-main">
                  <img alt="" src="assets/img/logo.png" />
                </a>
              </div>
              <div className="col-md-7 nav-cover">
                <ul className="nav-top">
                  <li>
                    <a href="#">
                      About us
              </a>
                  </li>
                  <li>
                    <a href="products">
                      Product &amp; Service
              </a>
                  </li>
                  <li>
                    <a href="#">
                      News
              </a>
                  </li>
                  <li>
                    <a href="#">
                      Partners
              </a>
                  </li>
                  <li>
                    <a href="contactUs">
                      Contact us
              </a>
                  </li>
                  <div className="nav-bottom">
                    <ul>
                      <li>
                        <a href="/#">
                          English
                  </a>
                      </li>
                      <li>
                        <a href="/#">
                          ไทย
                  </a>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
              <div className="col-5 col-md-3">
                <a href="login" className="btn-login">Client login</a>
                {/*  */}
                <a href className="navbar-toggler">
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="headshadow" />
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
          <SubscriptionTab handleOpenModal={this.handleOpenModal} />
          <div className="down-to-content">
            <img alt="" src="assets/img/icon-down.png" />
          </div>
        </div>
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
                        <div className="re-image">
                          <img alt="" src="dump/stock-photo-photovoltaic-modules-reflect-sunset-light-and-clouds-288145694.jpg" />
                        </div>
                        <div className="re-detail">
                          <h4>
                            Energy Attribute Certificates (EACs)
                    </h4>
                          <p>
                            Power consumers can source a variety of
                            Renewable Energy Certificates (RECs) in the geography and type of renewables they want under the internationally accepted certification standard e.g. I-REC
                    </p>
                        </div>
                        <div className="btn">
                          <a href="/#">
                            Learn more
                    </a>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="re-image">
                          <img alt="" src="dump/stock-photo--d-rendering-of-windturbines-on-the-ocean-31110454.jpg" />
                        </div>
                        <div className="re-detail">
                          <h4>
                            Digital Power Purchase Agreement (PPA)
                    </h4>
                          <p>
                            Power consumers can engage in PPA with terms they want through simplified process and automatically receive corresponding RECs for easy and accurate tracking.
                    </p>
                        </div>
                        <div className="btn">
                          <a href="/#">
                            Learn more
                    </a>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="re-image">
                          <img alt="" src="dump/stock-photo-ev-car-or-electric-car-at-charging-station-with-the-power-cable-supply-plugged-in-on-blurred-1320569111.jpg" />
                        </div>
                        <div className="re-detail">
                          <h4>
                            Green EV charging
                    </h4>
                          <p>
                            Power consumers can further decrease emissions from their EV fleet by using 100% renewable energy for charging.
                    </p>
                        </div>
                        <div className="btn">
                          <a href="/#">
                            Learn more
                    </a>
                        </div>
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
                    <li className>
                      <div>
                        <a target="_blank" href="https://finance.yahoo.com/news/thailand-national-utility-launches-ethereum-145600093.html">
                          <div className="news-img">
                            <img alt="" src="dump/news-im.jpg" />
                          </div>
                          <div className="news-desc">
                            <h3>
                              Thailand’s national utility launches Ethereum-based renewable energy platform
                      </h3>
                            <p>
                              Thailand’s state-owned energy company, PTT, has partnered with the nonprofit Energy Web Foundation to create a new blockchain-based renewable energy system.
                      </p>
                            <span className="meta">
                              15 September 2019
                      </span>
                          </div>
                          <div className="news-more">
                            <h3>
                              Thailand’s national utility launches Ethereum-based renewable energy platform
                      </h3>
                            <p>Thailand’s state-owned energy company, PTT, has partnered with the nonprofit Energy Web Foundation to create a new blockchain-based renewable energy system.</p>
                            <p>Their goal is to develop a regional energy solution that’s compliant with the International Renewable Energy Certificates Standard (I-REC), which provides certificates to companies verifying that their green energy is legitimate and derived from a reliable and sustainable source.</p>
                            <span className="meta">
                              15 September 2019
                      </span>
                          </div>
                        </a></div><a href="https://finance.yahoo.com/news/thailand-national-utility-launches-ethereum-145600093.html">
                      </a>
                    </li>
                    <li className>
                      <div>
                        <a href="https://www.energyweb.org/2019/09/11/ptt-and-energy-web-foundation-launch-blockchain-based-renewables-platform-for-thailand-asean-japan/">
                          <div className="news-img">
                            <img alt="" src="dump/news-im-2.jpg" />
                          </div>
                          <div className="news-desc">
                            <h3>
                              PTT and Energy Web Foundation Launch Blockchain-based Renewables Platform for Thailand, ASEAN, Japan</h3>
                            <p>
                              New tool will support corporate renewable purchases in the region, with fully commercial application expected by May 2020
                      </p>
                            <span className="meta">
                              11 September 2019
                      </span>
                          </div>
                          <div className="news-more">
                            <h3>
                              PTT and Energy Web Foundation Launch Blockchain-based Renewables Platform for Thailand, ASEAN, Japan
                      </h3>
                            <p>
                              New tool will support corporate renewable purchases in the region, with fully commercial application expected by May 2020
                      </p>
                            <p>
                              Bangkok, Thailand, and Zug, Switzerland — September 11, 2019 — Today, Thailand-based multinational energy conglomerate PTT and global energy blockchain nonprofit Energy Web Foundation (EWF) jointly announced the development of a new blockchain-based renewables platform.
                      </p>
                            <span className="meta">
                              11 September 2019
                      </span>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li className>
                      <div>
                        <a target="_blank" href="https://www.ledgerinsights.com/ptt-blockchain-renewable-energy-marketplace-rec-ewf/">
                          <div className="news-img">
                            <img alt="" src="dump/stock-photo-photovoltaic-panels-for-renewable-electric-production-navarra-aragon-spain-500035789.jpg" />
                          </div>
                          <div className="news-desc">
                            <h3>
                              PTT to launch blockchain renewable energy marketplace
                      </h3>
                            <p>
                              Today state-owned Thai energy conglomerate PTT announced plans to develop a blockchain-based renewables marketplace in collaboration with Energy Web Foundation (EWF)
                      </p>
                            <span className="meta">
                              09 August 2019
                      </span>
                          </div>
                          <div className="news-more">
                            <h3>
                              PTT to launch blockchain renewable energy marketplace
                      </h3>
                            <p>
                              Today state-owned Thai energy conglomerate PTT announced plans to develop a blockchain-based renewables marketplace in collaboration with Energy Web Foundation (EWF), an energy blockchain nonprofit. The launch of the full PTT Renewables Marketplace Platform is set for May 2020.
                      </p>
                            <span className="meta">
                              09 August 2019
                      </span>
                          </div>
                        </a>
                      </div>
                    </li>
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
        <footer>
          <div className="footer-nav">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-9">
                  <ul className="nav-footer">
                    <li>
                      <a href="/">
                        Home
                </a>
                    </li>
                    <li>
                      <a href="/products">
                        Product &amp; Service
                </a>
                    </li>
                    <li>
                      <a href="#">
                        News
                </a>
                    </li>
                    <li>
                      <a href="#">
                        Partners
                </a>
                    </li>
                    <li>
                      <a href="contactUs">
                        Contact us
                </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-3 d-none d-none d-md-block">
                  <span>Follow us:</span>
                  <ul>
                    <li>
                      <a href="/#" target="_blank">
                        <img alt="" src="assets/img/Icon_Social_01.png" />
                      </a>
                    </li>
                    <li>
                      <a href="/#" target="_blank">
                        <img alt="" src="assets/img/Icon_Social_02.png" />
                      </a>
                    </li>
                    <li>
                      <a href="/#" target="_blank">
                        <img alt="" src="assets/img/Icon_Social_03.png" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="d-md-none footer-follow">
            <div className="container">
              <span>Follow us:</span>
              <ul>
                <li>
                  <a href="/#" target="_blank">
                    <img alt="" src="assets/img/Icon_Social_01.png" />
                  </a>
                </li>
                <li>
                  <a href="/#" target="_blank">
                    <img alt="" src="assets/img/Icon_Social_02.png" />
                  </a>
                </li>
                <li>
                  <a href="/#" target="_blank">
                    <img alt="" src="assets/img/Icon_Social_03.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              <ul>
                <li>
                  © 2019 Expresso rep. All Rights Reserved.
          </li>
                <li>
                  <a href="tems_of_use">
                    Terms and conditions
            </a>
                </li>
                <li>
                  <a href="privacy_policy">
                    Privacy Policy
            </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="btn-totop">
            <a href="/#">
              <img alt="" className="d-none d-none d-md-block" src="assets/img/ico-top.png" />
              <img alt="" className="d-md-none" src="assets/img/ico-top-m.png" />
            </a>
          </div>
        </footer>
      </div>

    )
  }
}






export default Main;