import React from 'react'

const initState = {}

class ProductsPage extends React.Component {
    constructor() {
        super()
        this.state = { ...initState }
    }

    render() {
        return (
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
                <header>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-md-2">
                                <a href="/" className="logo-main">
                                    <img src="assets/img/logo.png" />
                                </a>
                            </div>
                            <div className="col-md-7 nav-cover">
                                <ul className="nav-top">
                                    <li>
                                        <a href="/#about">
                                            About us
              </a>
                                    </li>
                                    <li>
                                        <a href="products">
                                            Product &amp; Service
              </a>
                                    </li>
                                    <li>
                                        <a href="/#news">
                                            News
              </a>
                                    </li>
                                    <li>
                                        <a href="/#partners">
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
                                                <a href>
                                                    English
                  </a>
                                            </li>
                                            <li>
                                                <a href>
                                                    ไทย
                  </a>
                                            </li>
                                        </ul>
                                    </div>
                                </ul>
                            </div>
                            <div className="col-6 col-md-3">
                                <a href="login" className="btn-login">Client login</a>
                                {/*  */}
                                <a className="navbar-toggler">
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="headshadow" />
                <div className="page-product">
                    <div className="nav-product d-none d-none d-md-block">
                        <div className="container">
                            <ul>
                                <li>
                                    <a href>
                                        Energy Attribute Certificates (EACs)
            </a>
                                </li>
                                <li>
                                    <a href>
                                        Digital Power Purchase Agreement (PPA)
            </a>
                                </li>
                                <li>
                                    <a href>
                                        Green EV charging
            </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="eacs" className="eacs">
                        <img className="d-none d-none d-md-block" src="assets/img/product_02.jpg" />
                        <div className="d-md-none prelative">
                            <img src="assets/img/product-mobile_02.jpg" />
                            <a href="assets/img/product-mobile_02.jpg" download>
                                <img src="assets/img/ico-download.jpg" />
                            </a>
                        </div>
                        <div className="d-md-none prelative">
                            <img src="assets/img/product-mobile_04.jpg" />
                            <a href="assets/img/product-mobile_04.jpg" download>
                                <img src="assets/img/ico-download.jpg" />
                            </a>
                        </div>
                    </div>
                    <div id="ppa" className="ppa">
                        <div className="container d-none d-none d-md-block">
                            <div className="row">
                                <div className="col" style={{ paddingBottom: '30px' }}>
                                    <img src="assets/img/offer-notebook.png" />
                                </div>
                                <div className="col">
                                    <img className="dtext" src="assets/img/product_05.jpg" />
                                    <a href className="dvid-1">
                                        <img className src="assets/img/product_07.jpg" />
                                    </a>
                                    <a href className="dvid-2">
                                        <img className src="assets/img/product_08.jpg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <img className="d-none d-none d-md-block" src="assets/img/product_03.jpg" />
                        <div className="d-md-none">
                            <div className="col-12">
                                <img src="assets/img/offer-notebook.png" />
                            </div>
                            <div className="col-6">
                                <a href className="dvid-1">
                                    <img src="assets/img/product-mobile_07.jpg" />
                                </a>
                            </div>
                            <div className="col-6">
                                <a href className="dvid-2">
                                    <img src="assets/img/product-mobile_08.jpg" />
                                </a>
                            </div>
                        </div>
                        <img className="d-md-none" src="assets/img/product-mobile_09.jpg" />
                    </div>
                    <div id="greenev" className="greenev">
                        <img className="d-none d-none d-md-block" src="assets/img/product_04.jpg" />
                        <img className="d-md-none" src="assets/img/product-mobile_10.jpg" />
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
                                            <a href="/#about">
                                                About us
                </a>
                                        </li>
                                        <li>
                                            <a href="products">
                                                Product &amp; Service
                </a>
                                        </li>
                                        <li>
                                            <a href="/#news">
                                                News
                </a>
                                        </li>
                                        <li>
                                            <a href="/#partners">
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
                                {/* <div class="col-12 col-md-3 d-none d-none d-md-block">
                  <span>Follow us:</span>
                  <ul>
                      <li>
                          <a href="" target="_blank">
                              <img src="assets/img/Icon_Social_01.png">
                          </a>
                      </li>
                      <li>
                          <a href="" target="_blank">
                              <img src="assets/img/Icon_Social_02.png">
                          </a>
                      </li>
                      <li>
                          <a href="" target="_blank">
                              <img src="assets/img/Icon_Social_03.png">
                          </a>
                      </li>
                  </ul>
              </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <div class="d-md-none footer-follow">

      <div class="container">
      <span>Follow us:</span>
      <ul>
          <li>
              <a href="" target="_blank">
                  <img src="assets/img/Icon_Social_01.png">
              </a>
          </li>
          <li>
              <a href="" target="_blank">
                  <img src="assets/img/Icon_Social_02.png">
              </a>
          </li>
          <li>
              <a href="" target="_blank">
                  <img src="assets/img/Icon_Social_03.png">
              </a>
          </li>
      </ul>
  </div>
  </div> */}
                    <div className="footer-copyright">
                        <div className="container">
                            <ul>
                                <li>
                                    © 2019 Expresso rep. All Rights Reserved.
          </li>
                                <li>
                                    <a href="terms_of_use">
                                        Terms and conditions
            </a>
                                </li>
                                <li>
                                    <a href="privacy_policy">
                                        Privacy Policy
            </a>
                                </li>
                                {/* <li>
						<a href="">
							Cookie Policy
						</a>
					</li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="btn-totop">
                        <a href>
                            <img className="d-none d-none d-md-block" src="assets/img/ico-top.png" />
                            <img className="d-md-none" src="assets/img/ico-top-m.png" />
                        </a>
                    </div>
                </footer>
                {/* show */}
                <div id="dvid-1" className="modal modal-video fade">
                    <a href className="close-modal">
                        <img src="assets/img/ico-close.png" />
                    </a>
                    <div className="modal-content">
                        <video controls>
                            <source src="assets/vdo/seller-export.mp4" type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                </div>
                <div id="dvid-2" className="modal modal-video fade">
                    <a href className="close-modal">
                        <img src="assets/img/ico-close.png" />
                    </a>
                    <div className="modal-content">
                        <video controls>
                            <source src="assets/vdo/buyer-export.mp4" type="video/mp4" />
                            Your browser does not support HTML5 video.
                    </video>
                    </div>
                </div>
                <div className="overlay " />
            </div>

        )
    }
}

export default ProductsPage