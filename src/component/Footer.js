import React from 'react'

function Footer() {
    return (
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
                                    <a href="#">
                                        About us
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
                    </div>
                </div>
            </div>
            <div className="d-md-none footer-follow">
                <div className="container">
                    <span>Follow us:</span>
                    <ul>
                        <li>
                            <a href="#" target="_blank">
                                <img alt="" src="assets/img/Icon_Social_01.png" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img alt="" src="assets/img/Icon_Social_02.png" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
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
                            <a href="terms_of_use">
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
                <a href="#">
                    <img alt="" className="d-none d-none d-md-block" src="assets/img/ico-top.png" />
                    <img alt="" className="d-md-none" src="assets/img/ico-top-m.png" />
                </a>
            </div>
        </footer>
    )
}

export default Footer