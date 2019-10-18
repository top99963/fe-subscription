import React from 'react'
import axios from 'axios'
import config from './config'

const { baseUrl } = config
const initState = {
    topic: '',
    name: '',
    email: '',
    message: ''
}

class ContactUs extends React.Component {
    constructor() {
        super()
        this.state = { ...initState }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        var { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit() {
        event.preventDefault()
        axios.post(baseUrl + '/contact_us', this.state)
            .then(res => {
                if (res.data) {
                    alert('success')
                }
            })
            .catch(err => {
                console.log(err)
                alert('error')
            })
            .then(() => {
                this.setState({ ...initState })
            })
    }
    
    render() {
        return (
            <div>
                <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
                <header>
                    <div className="container">
                        <div className="row">
                            <div className="col-7 col-md-2">
                                <a href="/" className="logo-main">
                                    <img alt=""src="assets/img/logo.png" />
                                </a>
                            </div>
                            <div className="col-md-7 nav-cover">
                                <ul className="nav-top">
                                    <li>
                                        <a href>
                                            About us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
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
                                        <a href="contactus">
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
                            <div className="col-5 col-md-3">
                                <a href="login" className="btn-login">Client login</a>
                                <a className="navbar-toggler">
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="headshadow" />
                <div className="page-contact">
                    <div className="hero-image">
                        <h1>Contact us</h1>
                    </div>
                    <div className="contact-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="contact-detail">
                                        <h2>ADDRESS</h2>
                                        <label>PTT Innovation Lab (ExpressSo)</label>
                                        <label>PTT Public Company Limited (PTT)</label>
                                        <p>555 Vibhavadi Rangsit Road Chatuchak Bangkok 10900 Thailand</p>
                                        <a className="btn-map" href="https://goo.gl/maps/dQyYUqY3RtvEqziF8" target="_blank">
                                            Get direction
                                        </a>
                                        <div className="contact-interact">
                                            <div className="row">
                                                <div className="col">
                                                    <a className="btn-mail" href="mailto:pttexpresso@pttplc.com">
                                                        <span>Email<br />
                                                            <span>pttexpresso@pttplc.com</span></span>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a className="btn-call" href="tel:66-2-537-4112">
                                                        <span>Call<br />
                                                            <span>+66-2-537-4112</span></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="contact-form">
                                        <h2>HOW MAY WE ASSIST YOU?</h2>
                                        <p>Fill out the form below to send your message to ReAcc.</p>
                                        <form>
                                            <div className="form-group f-line">
                                                <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
                                            </div>
                                            <div className="form-group f-line">
                                                <input name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
                                            </div>
                                            <div className="form-group ">
                                                <input name="topic" value={this.state.topic} onChange={this.handleChange} placeholder="Topic" />
                                            </div>
                                            <div className="form-group ">
                                                <textarea  value={this.state.message} rows={4} cols={41} name="message" onChange={this.handleChange} placeholder="Message" />
                                            </div>
                                            <div className="form-group ">
                                                <button onClick={this.handleSubmit}>Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
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
                                            <a href="#">
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
                                            <a href="contactus">
                                                Contact us
                </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-3 d-none d-none d-md-block">
                                    <span>Follow us:</span>
                                    <ul>
                                        <li>
                                            <a href="#" >
                                                <img alt=""src="assets/img/Icon_Social_01.png" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <img alt=""src="assets/img/Icon_Social_02.png" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <img alt=""src="assets/img/Icon_Social_03.png" />
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
                                    <a href target="_blank">
                                        <img alt=""src="assets/img/Icon_Social_01.png" />
                                    </a>
                                </li>
                                <li>
                                    <a href target="_blank">
                                        <img alt=""src="assets/img/Icon_Social_02.png" />
                                    </a>
                                </li>
                                <li>
                                    <a href target="_blank">
                                        <img alt=""src="assets/img/Icon_Social_03.png" />
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
                                    <a href="#">
                                        Terms and conditions
            </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Privacy Policy
            </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Cookie Policy
            </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="btn-totop">
                        <a href>
                            <img alt=""className="d-none d-none d-md-block" src="assets/img/ico-top.png" />
                            <img alt=""className="d-md-none" src="assets/img/ico-top-m.png" />
                        </a>
                    </div>
                </footer>
            </div>

        )
    }
}

export default ContactUs