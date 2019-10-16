import React from 'react';
import './App.css';
import Script from 'react-load-script'
import SubscriptionTab from './SubscriptionTab'

class App extends React.Component {

  render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
        <link rel="stylesheet" type="text/css" href="http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css" />

        <header>
          <div className="container">
            <div className="row">
              <div className="col">
                <a href className="logo-main">
                  <img src="assets/img/logo.png" />
                </a>
              </div>
              <div className="col-7">
                <ul className="nav-top collapse show" id="navbarToggleExternalContent">
                  <li>
                    <a href>
                      About us
              </a>
                  </li>
                  <li>
                    <a href>
                      Service
              </a>
                  </li>
                  <li>
                    <a href>
                      Partners
              </a>
                  </li>
                  <li>
                    <a href>
                      News
              </a>
                  </li>
                  <li>
                    <a href>
                      Contact us
              </a>
                  </li>
                </ul>
              </div>
              <div className="col">
                {/*  */}
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="true" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
    </button> */}
              </div>
            </div>
          </div>
        </header>
        <div className="headshadow" />
        <div className="hero-slide">
          <div className="slide">
            <div className="item-slide">
              <img className="d-none d-none d-md-block" src="dump/stock-photo-sun-rays-over-a-photovoltaic-power-plant-188611307.jpg" />
              <img className="d-md-none" src="dump/stock-mobile.jpg" />
              <div className="slide-detail container">
                <h1>
                  <img src="assets/img/expressorep-title.png" />
                </h1>
                <p>
                  The platform that helps corporate buyers achieve their <br />
                  renewables goal at ease and meaningful, and create additional revenue <br />
                  for renewables developers or generator
          </p>
                <a href>
                  Learn more
          </a>
              </div>
            </div>
            <div className="item-slide">
              <img className="d-none d-none d-md-block" src="dump/stock-photo-sun-rays-over-a-photovoltaic-power-plant-188611307.jpg" />
              <img className="d-md-none" src="dump/stock-mobile.jpg" />
              <div className="slide-detail container">
                <h1>
                  <img src="assets/img/expressorep-title.png" />
                </h1>
                <p>
                  The platform that helps corporate buyers achieve their <br />
                  renewables goal at ease and meaningful, and create additional revenue <br />
                  for renewables developers or generator
          </p>
                <a href>
                  Learn more
          </a>
              </div>
            </div>
            <div className="item-slide">
              <img className="d-none d-none d-md-block" src="dump/stock-photo-sun-rays-over-a-photovoltaic-power-plant-188611307.jpg" />
              <img className="d-md-none" src="dump/stock-mobile.jpg" />
              <div className="slide-detail container">
                <h1>
                  <img src="assets/img/expressorep-title.png" />
                </h1>
                <p>
                  The platform that helps corporate buyers achieve their <br />
                  renewables goal at ease and meaningful, and create additional revenue <br />
                  for renewables developers or generator
          </p>
                <a href>
                  Learn more
          </a>
              </div>
            </div>
            <div className="item-slide">
              <img className="d-none d-none d-md-block" src="dump/stock-photo-sun-rays-over-a-photovoltaic-power-plant-188611307.jpg" />
              <img className="d-md-none" src="dump/stock-mobile.jpg" />
              <div className="slide-detail container">
                <h1>
                  <img src="assets/img/expressorep-title.png" />
                </h1>
                <p>
                  The platform that helps corporate buyers achieve their <br />
                  renewables goal at ease and meaningful, and create additional revenue <br />
                  for renewables developers or generator
          </p>
                <a href>
                  Learn more
          </a>
              </div>
            </div>
          </div>
          <SubscriptionTab />
          <div className="down-to-content">
            <img src="assets/img/icon-down.png" />
          </div>
        </div>
        <div className="re-network">
          <div className="container">
            <div className="paper">
              <h2>
                The world’s most influential corporate RE buyer networks
        </h2>
              <p>
                The infrastructure for generating and supplying renewable energy is one of the fastest growing sectors worldwide. <br />
                Never before has the market environment been more favorable for companies to source green energy and <br />
                thereby contributing to climate change mitigation.
        </p>
              <div className="re-list">
                <div className="row justify-content-center">
                  <div className="col-12 col-sm-10">
                    <div className="row">
                      <div className="col">
                        <div className="re-image">
                          <img src="dump/stock-photo-photovoltaic-modules-reflect-sunset-light-and-clouds-288145694.jpg" />
                        </div>
                        <div className="re-detail">
                          <h4>
                            Energy attribute certificates (EACs) Complied with I-REC Standard
                    </h4>
                          <p>
                            We have a vision of a future world where all energy comes from clean or renewable sources.
                    </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="re-image">
                          <img src="dump/stock-photo--d-rendering-of-windturbines-on-the-ocean-31110454.jpg" />
                        </div>
                        <div className="re-detail">
                          <h4>
                            A power purchase agreement (PPA)
                    </h4>
                          <p>
                            To accelerate the transition to this world, we are
                            striving to incentivize green growth and bring clean
                            energy to markets everywhere.
                    </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="re-image">
                          <img src="dump/stock-photo-ev-car-or-electric-car-at-charging-station-with-the-power-cable-supply-plugged-in-on-blurred-1320569111.jpg" />
                        </div>
                        <div className="re-detail">
                          <h4>
                            Green EV charging
                    </h4>
                          <p>
                            To accelerate the transition to this world, we are
                            striving to incentivize green growth and bring clean
                            energy to markets everywhere.
                    </p>
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
          <div className="container">
            <div className="top-why">
              <img src="assets/img/join-text.png" />
            </div>
            <div className="row">
              <div className="col-5 col-md-6 col-lg-5">
                <div className="comment">
                  <img src="assets/img/ico-bubble.png" />
                  <div className="comment-detail">
                    Companies that prioritize clean technology,
                    like renewables...are not only being environmentally responsible, they are also future-proofing their
                    growth by factoring in long-term risk and positioning
                    themselves as winners of the low-carbon economy.
                    World Economic Forum
              <div className="commentator">
                      <img src="assets/img/img-human.png" />
                      <div>
                        Michael Terrell
                  <span>
                          Associate Director of Graduate Studies
                  </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-7 col-md-6 col-lg-7">
                <p>
                  The RE-Source Platform is a European alliance of stakeholders representing clean energy buyers and suppliers for corporate renewable energy sourcing. This platform pools resources and coordinates activities to promote a better framework for corporate renewable energy sourcing at EU and national level.
          </p>
                <p>
                  The potential for corporate sourcing of renewable energy in Europe is significant and largely untapped. This is the first and only multi-stakeholder platform in Europe bringing together the interests of both buyers and sellers, to unlock the potential of new business models, accelerate the transition to clean, affordable renewable energy sources and help combat climate change.
          </p>
              </div>
            </div>
          </div>
        </div>
        <div className="offer">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-5" />
              <div className="col-12 col-sm-7">
                <div className="offer-detail">
                  <h2>
                    What we offer
            </h2>
                  <p>
                    When you become a member of <img src="assets/img/expresso-text.png" />	, you gain access to a wide range <br />
                    of educational resources, networking and partnership opportunities, and industry insights:
            </p>
                  <ul>
                    <li>
                      <div className="img-offer">
                        <img src="assets/img/offer-1.png" />
                      </div>
                      <div className="list-offer">
                        <h3>
                          LEARN
                  </h3>
                        <p>
                          We will provide primers and guides, templates and training that will
                          simplify the most important technical issues related to corporate
                          renewable energy transactions.
                  </p>
                      </div>
                    </li>
                    <li>
                      <div className="img-offer">
                        <img src="assets/img/offer-2.png" />
                      </div>
                      <div className="list-offer">
                        <h3>
                          CONNECT
                  </h3>
                        <p>
                          Our online marketplace will connect corporate buyers and renewable
                          energy generators with available projects. Our industry events will
                          provide further opportunities to network and share knowledge.
                  </p>
                      </div>
                    </li>
                    <li>
                      <div className="img-offer">
                        <img src="assets/img/offer-3.png" />
                      </div>
                      <div className="list-offer">
                        <h3>
                          TRACK
                  </h3>
                        <p>
                          Our deal tracker showcases new corporate renewable energy
                          contracts as they are announced.
                  </p>
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
              News <span><img src="assets/img/ico-slash.png" /></span> Events
      </h2>
            <div className="news-list">
              <ul className="row">
                <li className>
                  <div>
                    <div className="news-img">
                      <img src="dump/stock-photo--d-rendering-of-windturbines-on-the-ocean-31110454.jpg" />
                    </div>
                    <div className="news-desc">
                      <h3>
                        Proposed Offshore Wind Turbine Development to add 2.8GW of renewable power capacity to the UK
                </h3>
                      <p>
                        We have a vision of a future world where all energy comes from clean or renewable sources.
                </p>
                      <span className="meta">
                        09 August 2019
                </span>
                    </div>
                    <div className="news-more">
                      <h3>
                        Proposed Offshore Wind Turbine Development to add 2.8GW of renewable power capacity to the UK
                </h3>
                      <p>
                        A new report by Bloomberg NEF has
                        highlighted that the demand for clean energy
                        is set to grow.
                </p>
                      <p>
                        The New Energy Outlook combined the
                        expertise of over 65 market and technology
                        specialists in 12 countries to provide a unique
                        view of how the market will evolve.
                </p>
                      <p>
                        The outlook predicts that global power
                        demand will grow by 62 per cent between
                        now and 2050, equating to 1.5 per cent a year.
                        09 August 2019
                </p>
                      <span className="meta">
                        09 August 2019
                </span>
                    </div>
                  </div>
                </li>
                <li className>
                  <div>
                    <div className="news-img">
                      <img src="dump/stock-photo-photovoltaic-modules-reflect-sunset-light-and-clouds-288145694.jpg" />
                    </div>
                    <div className="news-desc">
                      <h3>
                        Aggressive decarbonisation needed to limit global temperature rise to 1.5C </h3>
                      <p>
                        A new report by Bloomberg NEF has
                        highlighted that the demand for clean energy
                        is set to grow.
                </p>
                      <span className="meta">
                        09 August 2019
                </span>
                    </div>
                    <div className="news-more">
                      <h3>
                        Amazon unveils latest renewable energy projects
                </h3>
                      <p>
                        A new report by Bloomberg NEF has
                        highlighted that the demand for clean energy
                        is set to grow.
                </p>
                      <p>
                        The New Energy Outlook combined the
                        expertise of over 65 market and technology
                        specialists in 12 countries to provide a unique
                        view of how the market will evolve.
                </p>
                      <p>
                        The outlook predicts that global power
                        demand will grow by 62 per cent between
                        now and 2050, equating to 1.5 per cent a year.
                        09 August 2019
                </p>
                      <span className="meta">
                        09 August 2019
                </span>
                    </div>
                  </div>
                </li>
                <li className>
                  <div>
                    <div className="news-img">
                      <img src="dump/stock-photo-photovoltaic-panels-for-renewable-electric-production-navarra-aragon-spain-500035789.jpg" />
                    </div>
                    <div className="news-desc">
                      <h3>
                        Amazon unveils latest renewable energy projects
                </h3>
                      <p>
                        A new report by Bloomberg NEF has
                        highlighted that the demand for clean energy
                        is set to grow.
                </p>
                      <span className="meta">
                        09 August 2019
                </span>
                    </div>
                    <div className="news-more">
                      <h3>
                        Aggressive decarbonisation needed to limit global temperature rise to 1.5C </h3>
                      <p>
                        A new report by Bloomberg NEF has
                        highlighted that the demand for clean energy
                        is set to grow.
                </p>
                      <p>
                        The New Energy Outlook combined the
                        expertise of over 65 market and technology
                        specialists in 12 countries to provide a unique
                        view of how the market will evolve.
                </p>
                      <p>
                        The outlook predicts that global power
                        demand will grow by 62 per cent between
                        now and 2050, equating to 1.5 per cent a year.
                        09 August 2019
                </p>
                      <span className="meta">
                        09 August 2019
                </span>
                    </div>
                  </div>
                </li>
                <li className>
                  <div>
                    <div className="news-img">
                      <img src="dump/stock-photo-ev-car-or-electric-car-at-charging-station-with-the-power-cable-supply-plugged-in-on-blurred-1320569111.jpg" />
                    </div>
                    <div className="news-desc">
                      <h3>
                        Aggressive decarbonisation needed to limit global temperature rise to 1.5C </h3>
                      <p>
                        A new report by Bloomberg NEF has
                        highlighted that the demand for clean energy
                        is set to grow.
                </p>
                      <span className="meta">
                        09 August 2019
                </span>
                    </div>
                    <div className="news-more">
                      <h3>
                        Aggressive decarbonisation needed to limit global temperature rise to 1.5C </h3>
                      <p>
                        A new report by Bloomberg NEF has
                        highlighted that the demand for clean energy
                        is set to grow.
                </p>
                      <p>
                        The New Energy Outlook combined the
                        expertise of over 65 market and technology
                        specialists in 12 countries to provide a unique
                        view of how the market will evolve.
                </p>
                      <p>
                        The outlook predicts that global power
                        demand will grow by 62 per cent between
                        now and 2050, equating to 1.5 per cent a year.
                        09 August 2019
                </p>
                      <span className="meta">
                        09 August 2019
                </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="btn">
              <a href>
                More news
        </a>
            </div>
          </div>
        </div>
        <div className="founding-member">
          <div className="container">
            <h2>
              Founding members <span><img src="assets/img/ico-slash.png" /></span> Partners
      </h2>
            <ul className="mem-1">
              <li>
                <img src="assets/img/founder-member.jpg" />
              </li>
            </ul>
            {/* <ul class="mem-2">
				<li>
					
				</li>
			</ul> */}
            <div>
              <h4>
                Do you want to become a <img src="assets/img/expresso-text.png" /> member?
        </h4>
              <a className="btn" href>
                Register Now
        </a>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer-nav">
            <div className="container">
              <div className="row">
                <div className="col col-md-9">
                  <ul className="nav-footer">
                    <li>
                      <a href>
                        Home
                </a>
                    </li>
                    <li>
                      <a href>
                        Products
                </a>
                    </li>
                    <li>
                      <a href>
                        About us
                </a>
                    </li>
                    <li>
                      <a href>
                        Service
                </a>
                    </li>
                    <li>
                      <a href>
                        Partners
                </a>
                    </li>
                    <li>
                      <a href>
                        News
                </a>
                    </li>
                    <li>
                      <a href>
                        Contact us
                </a>
                    </li>
                  </ul>
                </div>
                <div className="col col-md-3">
                  <span>Follow us:</span>
                  <ul>
                    <li>
                      <a href target="_blank">
                        <img src="assets/img/Icon_Social_01.png" />
                      </a>
                    </li>
                    <li>
                      <a href target="_blank">
                        <img src="assets/img/Icon_Social_02.png" />
                      </a>
                    </li>
                    <li>
                      <a href target="_blank">
                        <img src="assets/img/Icon_Social_03.png" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              <ul>
                <li>
                  © 2019 Expresso rep. All Rights Reserved.
          </li>
                <li>
                  <a href>
                    Terms and conditions
            </a>
                </li>
                <li>
                  <a href>
                    Privacy Policy
            </a>
                </li>
                <li>
                  <a href>
                    Cookie Policy
            </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="btn-totop">
            <a href>
              <img src="assets/img/ico-top.png" />
            </a>
          </div>
        </footer>
        {/* show */}
        <div id="register-success" className="modal fade">
          <a href className="close-modal">
            <img src="assets/img/ico-close.png" />
          </a>
          <div className="modal-content">
            <h2>Thank you for registration</h2>
            <p>
              We appreciate you contacting Expresso Rep. We will look over your message and get back to you by tomorrow. <br />
              In the meantime, you can check the FAQ section, look over our new product collection or <br />
              browse through our product.
      </p>
            <a className="btn" href>
              Submit
      </a>
          </div>
        </div>
        {/* show */}
        <div className="overlay " />
      </div>

    )
  }
}

export default App;