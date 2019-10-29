import React from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import ModalVideo from '../component/ModalVideo'
import './Product.css'

const initState = {}

class ProductsPage extends React.Component {
    constructor() {
        super()
        this.state = { ...initState }
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="page-product">
                    <div className="nav-product d-none d-none d-md-block">
                        <div className="container">
                            <ul>
                                <li>
                                    <a href="/#">
                                        Energy Attribute Certificates (EACs)
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        Digital Power Purchase Agreement (PPA)
                                </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        Green EV charging
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="eacs" className="eacs">
                        <img className="d-none d-none d-md-block" src="assets/img/product_02.jpg" alt='' />
                        <div className="d-md-none prelative">
                            <img src="assets/img/product-mobile_02.jpg" alt='' />
                            <a href="assets/img/product-mobile_02.jpg" download>
                                <img src="assets/img/ico-download.jpg" alt='' />
                            </a>
                        </div>
                        <div className="d-md-none prelative">
                            <img src="assets/img/product-mobile_04.jpg" alt='' />
                            <a href="assets/img/product-mobile_04.jpg" download>
                                <img src="assets/img/ico-download.jpg" alt='' />
                            </a>
                        </div>
                    </div>
                    <div id="ppa" className="ppa">
                        <div className="container d-none d-none d-md-block">
                            <div className="row">
                                <div className="col" style={{ paddingBottom: '30px' }}>
                                    <img src="assets/img/offer-notebook.png" alt='' />
                                </div>
                                <div className="col">
                                    <img className="dtext" src="assets/img/product_05.jpg" alt='' />
                                    <a href='/#' className="dvid-1">
                                        <img src="assets/img/product_07.jpg" alt='' />
                                    </a>
                                    <a href='/#' className="dvid-2">
                                        <img src="assets/img/product_08.jpg" alt='' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <img className="d-none d-none d-md-block" src="assets/img/product_03.jpg" alt='' />
                        <div className="d-md-none">
                            <div className="col-12">
                                <img src="assets/img/offer-notebook.png" alt='' />
                            </div>
                            <div className="col-6">
                                <a href='/#' className="dvid-1">
                                    <img src="assets/img/product-mobile_07.jpg" alt='' />
                                </a>
                            </div>
                            <div className="col-6">
                                <a href='/#' className="dvid-2">
                                    <img src="assets/img/product-mobile_08.jpg" alt='' />
                                </a>
                            </div>
                        </div>
                        <img className="d-md-none" src="assets/img/product-mobile_09.jpg" alt='' />
                    </div>
                    <div id="greenev" className="greenev">
                        <img className="d-none d-none d-md-block" src="assets/img/product_04.jpg" alt='' />
                        <img className="d-md-none" src="assets/img/product-mobile_10.jpg" alt='' />
                    </div>
                </div>
                <Footer />
                {/* show */}
                <ModalVideo id='dvid-1' img='assets/img/ico-close.png' vdo='assets/vdo/seller-export.mp4' />
                <ModalVideo id='dvid-2' img='assets/img/ico-close.png' vdo='assets/vdo/buyer-export.mp4' />
                <div className="overlay " />
            </div>

        )
    }
}

export default ProductsPage