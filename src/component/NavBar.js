import React from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <div>
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
                                    <a href="contact_us">
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
                            <a href="/#" className="navbar-toggler">
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <div className="headshadow" />
        </div>

    )
}

export default NavBar